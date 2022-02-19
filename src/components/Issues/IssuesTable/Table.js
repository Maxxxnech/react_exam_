import React from "react";
import TableIssueRow from "./TableIssueRow";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
export default function TableIssues({ issues, updateAndReload, showComments, handleClose, showFullText }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Номер</TableCell>
          <TableCell>статус обращения</TableCell>
          <TableCell>Дата и время создания</TableCell>

          <TableCell>Название</TableCell>
          <TableCell>Автор обращения</TableCell>
          <TableCell>Комментарии</TableCell>
          <TableCell>Перейти к обращению</TableCell>
          <TableCell>Изменить статус обращения</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {issues.map((el) => (
          <TableIssueRow
            key={el.number}
            issue={el}
            showFullText={showFullText}
            handleClose={handleClose}
            showComments={showComments}
          />
        ))}
      </TableBody>
    </Table>
  );
}
