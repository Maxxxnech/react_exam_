import React from "react";
import TableRow from "./TableRow";

export default function TableIssues({ issues, updateAndReload, showComments, handleClose, showFullText }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Номер</td>
          <td>статус обращения</td>
          <td>Дата и время создания</td>

          <td>Название</td>
          <td>Автор обращения</td>
          <td>Комментарии</td>
          <td>Перейти к обращению</td>
          <td>Изменить статус обращения</td>
        </tr>
      </thead>
      <tbody>
        {issues.map((el) => (
          <TableRow
            key={el.number}
            issue={el}
            showFullText={showFullText}
            handleClose={handleClose}
            showComments={showComments}
          />
        ))}
      </tbody>
    </table>
  );
}
