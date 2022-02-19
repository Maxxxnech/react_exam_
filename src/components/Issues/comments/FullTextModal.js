import React, { PureComponent, useRef } from "react";
import "./css/Comments.css"
import ModalWrapper from "../../ModalWrapper";


export default function FullTextModal({ text, closeModal }) {

  return (
    <ModalWrapper>
      <div className="modal">
        <button className="modalButton" onClick={() => closeModal(false)}>
          Закрыть
        </button>
        <div>{text}</div>
      </div>
    </ModalWrapper>
  );
}
