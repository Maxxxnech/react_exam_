import React, { PureComponent, useRef } from "react";
import "./css/Comments.css"
import ModalWrapper from "../../ModalWrapper";
import { Button } from "@mui/material";

export default function FullTextModal({ text, closeModal }) {

  return (
    <ModalWrapper>
      <div className="modal">
        <Button variant="outlined" className="modal_close" onClick={() => closeModal(false)}>
          Закрыть
        </Button>
        <div>{text}</div>
      </div>
    </ModalWrapper>
  );
}
