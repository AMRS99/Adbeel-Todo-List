import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
import { getData} from "../lib/actions";

const Todo = () =>{
    const[user,setUser]=useState("");
    const[todo,setTodo]=useState("");
    const[task,setTask]=useState([]);
    const[count,setCount]=useState(0);

    useEffect(() => {
        getData(setTask);
    },[]);

    return(
        <>
        <div className="d-flex flex-column align-items-center mt-3">
            <h1>Todos</h1>
            <TodoHeader
                todo={todo}
                setTodo={setTodo}
                tasks = {task}
                setTasks = {setTask}
            />
            <TodoBody 
            tasks={task}
            setTasks = {setTask}
            />
            <TodoFooter 
                tasks={task}
                setTasks={setTask}
            />
        </div>
        </>
    )
}

export default Todo;