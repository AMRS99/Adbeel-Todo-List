import React from "react";

const TodoHeader = ({todo,setTodo,tasks,setTasks,count,setCount}) => {

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
        console.log(todo);
        let newTask = {id: count, title:todo, done:false};
        setTasks([...tasks,newTask]);
        setCount(count+1);

    }

    return(
        <>
        <header className="todo-header">
            <input 
            onKeyDown={(e)=>ValidateInput(e)}
            type="text"
            placeholder="What need to be done?"
            onChange={e => setTodo(e.target.value)}
            value={todo}
            />
        </header>
        </>
    )
}

export default TodoHeader;