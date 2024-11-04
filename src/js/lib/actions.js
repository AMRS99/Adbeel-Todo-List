
export const getData = async (setTask) => {
    const response = await fetch("https://playground.4geeks.com/todo/users/Vini_balon_d'or");
    if(response.ok){
        const data = await response.json();
        setTask(data.todos);
    }
    else{
        console.log("Error: ", response.status, response.statusText);

        return {error: {status: response.status, statusText: response.statusText}}
    }
}

export const PostData = (newTask,setTasks) =>{
    let options = {
        method: "POST",
        body: JSON.stringify(newTask),
        headers:{
            "Content-Type": "application/json"
        }
    }
    fetch("https://playground.4geeks.com/todo/todos/Vini_balon_d'or", options)
    .then(response =>{
        if(!response.ok) throw new Error(response.statusText);
        getData(setTasks);
        console.log(response);
        return response.json();
    })
    .then(data => console.log("Success", data))
    .catch(error => console.error(error));

}

export const DeleteTask = (deleteTodo,setTasks)=>{
        fetch(`https://playground.4geeks.com/todo/todos/${deleteTodo}`, {
            method: "DELETE"
        })
        .then(response =>{
            if(response.status === 204){
                getData(setTasks);
            }
            else{
                throw new Error("Error! The task was not deleted or found.")
            }
        })
        .catch(error => console.error(error));
}

export const DeleteUser = () =>{
    fetch("https://playground.4geeks.com/todo/users/Vini_balon_d'or", {
        method: "DELETE"
    })
    .then(response =>{
        if(response.status === 204){
            console.log("User successfull deleted");
            
        }
        else{
            throw new Error("Error! The user was not deleted or found.")
        }
    })
    .catch(error => console.error(error));
}
