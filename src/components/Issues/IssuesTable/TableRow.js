import { ImGithub } from "react-icons/im";
import React from "react";
export default function TableRow({issue, handleClose, showComments, showFullText }) {
  return issue? (
    <tr key={issue.number}>
      <td>{issue.number}</td>
      <td>{issue.state}</td>

      <td>{issue.created_at}</td>

      <td className="clickable" onClick={() => showFullText(issue.body)}>{issue.title}</td>

      <td>
        <a href={issue.user.html_url} target="_blank" rel="noreferrer">
          {issue.user.login}
        </a>
      </td>

      <td>
        <button onClick={() => showComments(issue.comments_url, issue.number)}>
          Перейти к коментариям
        </button>
      </td>

      <td>
        <button onClick={() => (window.open(issue.html_url, '_blank'))}>
          <ImGithub />
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            let newState = issue.state === "closed" ? "open" : "closed";
            handleClose(newState, issue.number);
          }}
        >
          {issue.state === "closed" ? "Открыть обращение" : "Закрыть обращение"}
        </button>
      </td>
    </tr>
  ) : "";
}
