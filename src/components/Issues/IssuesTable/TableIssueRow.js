import { ImGithub } from "react-icons/im";
import React from "react";
import { Button } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";

export default function TableIssueRow({issue, handleClose, showComments, showFullText }) {
  return issue? (
    <TableRow key={issue.number} className={"tr_"+issue.state}>
      <TableCell>{issue.number}</TableCell>
      <TableCell>{issue.state}</TableCell>

      <TableCell>{issue.created_at}</TableCell>

      <TableCell> <Button onClick={() => showFullText(issue.body)}>{issue.title}</Button></TableCell>

      <TableCell>
        <a href={issue.user.html_url} target="_blank" rel="noreferrer">
          {issue.user.login}
        </a>
      </TableCell>

      <TableCell>
        <Button onClick={() => showComments(issue.comments_url, issue.number)}>
          Перейти к коментариям
        </Button>
      </TableCell>

      <TableCell>
        <Button onClick={() => (window.open(issue.html_url, '_blank'))}>
          <ImGithub />
        </Button>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => {
            let newState = issue.state === "closed" ? "open" : "closed";
            handleClose(newState, issue.number);
          }}
        >
          {issue.state === "closed" ? "Открыть обращение" : "Закрыть обращение"}
        </Button>
      </TableCell>
    </TableRow>
  ) : "";
}
