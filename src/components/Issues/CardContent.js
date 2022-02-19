import React, {useState} from "react";
import "./css/CardContent.css";

export default function CardContent({title, body, state, createdAt, closedAt, html_url, user, handleClose, number }){
   const [open, setOpen] = useState(false);
   const handleClick= () =>{
       let newState = state === "closed"? "open": "closed"
       handleClose(newState, number);
   } 
    return (<div className={"CardContent " + state}>
        <h3 className="issueHeader" onClick={()=> setOpen(!open)}>{title}</h3>
        {open && <><p className="body">{body}</p>
        <p className="dates">Создано: {createdAt}</p>
        <p>Автор обращения {user}</p>
        <a target="_blank" rel="noreferrer" href={html_url}>ссылка issue в GitHub</a>
        {closedAt && <p className="dates">Закрыто: {closedAt}</p> } </>}
        <br></br>
        <button onClick={handleClick}>{state === "closed"? "Открыть обращение": "Закрыть обращение"}</button>
    </div>)
}