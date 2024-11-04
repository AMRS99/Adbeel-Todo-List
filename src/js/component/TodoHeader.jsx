import React from "react";
import { PostData } from "../lib/actions";

const TodoHeader = ({todo,setTodo,tasks,setTasks}) => {

    const ValidateInput = (e) => {
        if(e.code == "Enter"){
            if(todo ==="")
                alert("Please add a task");
            else{
                AddTask();
            }
        }
    }

    const AddTask = () => {
        let newTask = {label:todo, is_done:false};

        PostData(newTask,setTasks);
        setTodo("");
    }

    return(
        <>
        <header className="todo-header">
            <input className="input"
            type="text"
            placeholder="What needs to be done?"
            onChange={e => setTodo(e.target.value)}
            value={todo}
            onKeyDown={(e)=>ValidateInput(e)}
            />
        </header>
        </>
    )
}

export default TodoHeader;