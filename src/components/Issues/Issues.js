import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// *** Действия после перетаскивания**
import { onDragEnd } from "../../logic/dragAndDrop";

// **Модуль для fetch-запросов**
import {
  loadIssues,
  updateIssues,
  createComment,
} from "../../requests/requests";

import { dataMapper, tableMapper } from "../../logic/dataMapping";

import TableIssues from "./IssuesTable/Table";
import CommentsModal from "./comments/CommentsModal";
import FullTextModal from "./comments/FullTextModal";
import { Button } from "@mui/material";
// Заготовка для колонок
const columnsFromBackend = {
  open: {
    name: "Надо бы сделать",
    items: [],
  },
  closed: {
    // Заменить "close" на "closed" для соотвтествия полю state!
    name: "Готовенько!",
    items: [],
  },
};

export default function Issues() {
  // **Состояние для котображения колонок**
  const [columns, setColumns] = useState(columnsFromBackend);
  // **Состояние для  Issues**
  const [issues, setIssues] = useState([]);
  const [commentsModalOpen, setCommentsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [fullTextModalOpen, setfullTextModalOpen] = useState(false);
  const [fullText, setfullText] = useState("");
  // **Загрузка данных при монтировнии (аналогично componentDidMount)**
  useEffect(() => {
    loadIssues(setIssues);
  }, []);

  // **Изменение состояния колонок при изменении issues**
  useEffect(() => {
    if (!issues.length) return;
    // **Распределяем по колонкам содержимое issues**
    const newColumns = dataMapper(issues, columns, updateAndReload);
    // Устанавиливаем состояние колонок
    setColumns(newColumns);
  }, [issues]); // срабатывание только при изменении issues / columns (?)

  const updateAndReload = (issueState, issue_number) => {
    updateIssues(
      issueState,
      issue_number,
      //***После обновления репозитория - подтягиваем данные в приложение*** */
      () => loadIssues(setIssues)
    );
  };

  const getComments = async (url, number) => {
    let newComments;
    await fetch(url)
      .then((result) => result.json())
      .then((result) => {
        newComments = {
          issueNumber: number,
          url: url,
          data: result.map((el) => ({ id: el.id, body: el.body })),
        };
        setComments(newComments);
      });
    return newComments;
  };

  const showComments = async (url, number) => {
    await getComments(url, number);
    setCommentsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Обращения</h1>
      <Button variant="outlined" onClick={() => loadIssues(setIssues)}>Обновить таблицу</Button>
      <br></br>
      <TableIssues
        issues={issues}
        updateAndReload={updateAndReload}
        showFullText={(text) => {
          setfullText(text)
          setfullTextModalOpen(true);
        }}
        showComments={showComments}
        handleClose={updateAndReload}
      ></TableIssues>
      <br></br>
      <p>
        {fullTextModalOpen && <FullTextModal text={fullText} closeModal={setfullTextModalOpen}/>}
        {commentsModalOpen && (
          <CommentsModal
            comments={comments}
            closeModal={setCommentsModalOpen}
            addComment={createComment}
            refreshComments={() => getComments(comments.url, comments.number)}
          />
        )}
        Изменения синхронизированы с:{" "}
        <a
          href="https://github.com/Maxxxnech/react_exam_/issues"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Maxxxnech/l10_t10_test_authorization/issues
        </a>
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(
              result,
              columns,
              setColumns,
              //**************После перетаскивания - обновляем удаленный репозиторий ***/
              updateAndReload(
                result.destination.droppableId,
                result.draggableId
              )
            )
          }
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}
