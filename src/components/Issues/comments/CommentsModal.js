import React, { PureComponent, useRef } from "react";
import "./css/Comments.css"
import ModalWrapper from "../../ModalWrapper";
import Comment from "./Comment";
import { Button, Typography, List, TextField, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

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
    <ModalWrapper className="ModalWrapper">
      <div className="modal">
        <Button className="modal_close" variant="outlined" onClick={() => closeModal(false)}>
          Закрыть
        </Button>
        <List className="ModalList">
        {comments.data.map((comment) => (
          <Comment key={comment.id} commentText={comment.body}/>
        ))}
        </List>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <TextField
          id="newComment"
          inputRef={inputRef}  //!!! inputRef={...}
          name="comment"
          type="text"
          placeholder="newComment"
          helperText="Введите новый комментарий"
          sx={{height: "50px"}}
        ></TextField>
        <Button sx={{float:"right", height: "54px", marginLeft: "10px"}} variant="contained" onClick={addClickHandler}>
        <AddIcon />
        </Button>
        </Box>
      </div>
    </ModalWrapper>
  );
}
