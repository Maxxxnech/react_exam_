import React from "react";
import { List, ListItem} from "@mui/material";
export default function Comment({commentText}){
   return (<ListItem className="comment">{commentText} </ListItem>)
}