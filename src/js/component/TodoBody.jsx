import React, { useState } from "react";

const TodoBody = ({tasks,setTasks}) => {
    const DeleteTask = (deleteTodo)=>{

        let updateTasks = tasks.filter(todo => todo.id!==deleteTodo)
        setTasks(updateTasks);
    }

    let renderTasks = tasks.map(todo =>{
        return(
            <li className="list-item" key={todo.id}>
                    <label>{todo.title}</label>
                    <button onClick={()=>DeleteTask(todo.id)}>X</button>
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