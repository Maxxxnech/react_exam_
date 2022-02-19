import React, {useState} from "react";
import "./css/CardContent.css";

export default function CardContent({title, body, state, createdAt, closedAt, html_url, user}){
   const [open, setOpen] = useState(false);
    return (<div className={"CardContent " + state}>
        <h3>{title}</h3>
        <button onClick={()=> setOpen(!open)}>{!open? "Открыть": "Закрыть"}</button>
        {open && <><p className="body">{body}</p>
        <p className="dates">Создано: {createdAt}</p>
        <p>{user}</p>
        <a target="_blank" rel="noreferrer" href={html_url}>ссылка issue в GitHub</a>
        {closedAt && <p className="dates">Закрыто: {closedAt}</p> } </>}
    </div>)
}