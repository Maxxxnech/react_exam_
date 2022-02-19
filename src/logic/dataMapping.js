import React from "react";
// **Содержимое каждой карточки**
import CardContent from "../components/Issues/CardContent";


export function dataMapper(issues, columns, handleClose) {
  let newColumns = { ...columns };
  const mappedIssues = issues.map((el) => ({
    id: `${el.number}`,
    state: el.state, // для упрощения фильтрации
    content: (
      <CardContent
        title={el.title}
        body={el.body}
        state={el.state}
        createdAt={el.created_at}
        closedAt={el.closed_at}
        html_url={el.html_url}
        user={el.user.login}
        handleClose={handleClose}
        number={el.number}
      />
    ),
  }));

  // **Распределяем issue по колонкам Open / Close в зависимости от статуса выполнения**
  for (let key in newColumns) {
    let filtered = mappedIssues.filter(
      (el) => el.state.toLowerCase() === key.toLowerCase()
    );
    newColumns[key].items = filtered;
  }
  return newColumns;
}

