import React, { useState } from "react";
import { DeleteTask } from "../lib/actions";

const TodoBody = ({tasks,setTasks}) => {
    const [hidden, setHidden] = useState(true);
    let renderTasks = tasks.map(todo =>{
        return(
            <li className="d-flex justify-content-evenly list-item border bg-ligth" onMouseOver={() => setHidden(false)} onMouseLeave={() => setHidden(true)}key={todo.id}>

                    <label>{todo.label}</label>
                    {hidden ? null: <button className="btn btn-danger ms-2" onClick={()=>DeleteTask(todo.id,setTasks)}><svg xmlns="http://www.w3.org/2000/svg" 
                                                                                                                        width="12" 
                                                                                                                        height="12" 
                                                                                                                        fill="currentColor" 
                                                                                                                        className="bi bi-x-octagon-fill mb-1" 
                                                                                                                        viewBox="0 0 16 16">
                                                                                                                        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                                    </svg></button>}
            </li>
        )
    })
    return(
        <>
         <section className="todo-body">
            <ul className="todo-list" style={{"listStyle": "none"}}>
                {
                    tasks.length>=1
                    ?
                    renderTasks
                    :
                    "No tasks. Add a task"
                }
            </ul>
         </section>
        </>
    )
}

export default TodoBody;