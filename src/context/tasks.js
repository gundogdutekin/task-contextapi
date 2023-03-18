import axios from "axios";
import {useState, createContext } from "react";


const TaskContext=createContext()

function  Provider({children}){
    const [tasks, setTasks] = useState([])
    const [editHidden, setEdithidden] = useState(false)

    const listTasks=async ()=>{
        await axios.get("http://localhost:3004/tasks").then(result=>{setTasks(result.data)})
      }
      const onCreate =async  (title,task) => {
          const response=await axios.post("http://localhost:3004/tasks",{title,task}).then(result=>result)
          if(response.status===201 && response.statusText==="Created"){
            listTasks()
          }else{
            alert("Bir Hata Oluştu")
          }
         
      }
      
       const handleDelete=async (Key)=>{
        await axios.delete(`http://localhost:3004/tasks/${Key}`).then(result=>{listTasks()})
      }
      const updateTask=async (Key,title,task)=>{
        await axios.put(`http://localhost:3004/tasks/${Key}`,{title,task}).then(result=>{listTasks()})
        setEdithidden(!editHidden)
      }
    const setValue={
        editHidden,
        tasks,
        listTasks,
        onCreate,
        handleDelete,
        updateTask

    }


    return (
        <TaskContext.Provider value={setValue}>
            {children}
        </TaskContext.Provider>
    )
}
export {Provider}
export default TaskContext;
