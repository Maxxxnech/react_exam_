import React, { PureComponent, useRef } from "react";
import "./css/Comments.css"
import ModalWrapper from "../../ModalWrapper";
import Comment from "./Comment";

export default function CommentsModal({ comments, closeModal, addComment }) {
  const inputRef = useRef();
  const addClickHandler = () => {
    if(!inputRef.current.value){
      inputRef.current.focus();
      return;
    }
    addComment(comments.issueNumber, inputRef.current.value);
    inputRef.current.value = '';
  }
  return (
    <ModalWrapper>
      <div className="modal">
        <button className="modalButton" onClick={() => closeModal(false)}>
          Закрыть
        </button>
        {comments.data.map((comment) => (
          <Comment key={comment.id} commentText={comment.body}/>
        ))}
        <input
          ref={inputRef}
          name="comment"
          type="text"
          placeholder="newComment"
        ></input>
        <button onClick={addClickHandler}>
          Добавить комментарий
        </button>
      </div>
    </ModalWrapper>
  );
}
