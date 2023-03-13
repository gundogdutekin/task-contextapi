import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [tasks, setTasks] = useState([])
  const [editHidden, setEdithidden] = useState(false)

   useEffect(() => {
    listTasks()
   }, [])
   

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

  

  return (
    <div className="App">
      <TaskCreate onCreate={onCreate}/>
      <TaskList editHidden={editHidden}  onUpdate={updateTask}  handleDelete={handleDelete} tasks={tasks} />
    
   </div>
   
  );
}

export default App;
