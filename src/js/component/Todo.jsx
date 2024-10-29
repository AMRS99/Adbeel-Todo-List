import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

const Todo = () =>{

    const[todo,setTodo]=useState("");
    const[task,setTask]=useState([]);
    const[count,setCount]=useState(0);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://playground.4geeks.com/todo/users/Vini_balon_d'or");
            if(response.ok){
                const data = await response.json();
                console.log(data.todos);
                setTask(data.todos);
            }
            else{
                console.log("Error: ", response.status, response.statusText);

                return {error: {status: response.status, statusText: response.statusText}}
            }
        }

        getData();
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