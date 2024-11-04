import React from "react";
import { DeleteTask, DeleteUser } from "../lib/actions";

const TodoFooter = ({tasks,setTasks})=>{

    return(
        <>
            <footer className="footer">
                {
                    tasks.length!==1
                    ? `${tasks.length} items left`
                    : `${tasks.length} item left`
                }
                <div className="d-flex justify-content-evenly mt-2">
                    <button className="btn btn-danger" onClick={()=>{
                        console.log(tasks);
                        for (let index = 0; index < tasks.length; index++) {
                            DeleteTask(tasks[index].id,setTasks);                         
                        }
                        DeleteUser;
                    }}>Delete User</button>
                </div>
            </footer>
        </>
    )
}

export default TodoFooter