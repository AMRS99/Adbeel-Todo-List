import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
import { getData } from "../lib/actions";

const Todo = () =>{

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
                count = {count}
                setCount = {setCount}
            />
            <TodoBody 
            tasks={task}
            setTasks = {setTask}
            />
            <TodoFooter todos={task}/>
        </div>
        </>
    )
}

export default Todo;