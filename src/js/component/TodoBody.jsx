import React, { useState } from "react";
import { DeleteTask } from "../lib/actions";

const TodoBody = ({tasks,setTasks}) => {

    let renderTasks = tasks.map(todo =>{
        return(
            <li className="list-item border bg-ligth" key={todo.id}>
                    <label>{todo.label}</label>
                    <button onClick={()=>DeleteTask(todo.id,setTasks)}>X</button>
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