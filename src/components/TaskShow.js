import { useState,useContext } from "react"
import TaskContext from "../context/tasks"
import TaskCreate from "./TaskCreate"


function TaskShow({task}) {
    const {editHidden,handleDelete,updateTask} = useContext(TaskContext)
    const [showedit, setShowedit] = useState(editHidden ? editHidden:false)

    const itemDelete=(e)=>{
        e.preventDefault()
        handleDelete(e.target.value)
        
    }
    const handleEditChange=(e)=>{
        e.preventDefault()
        setShowedit(!showedit)                                         
    }
    const handleSubmit=(id,title,task)=>{
       
        setShowedit(false)
        updateTask(id,title,task)
    }
    return ( 
        <div className="card"> 
          {showedit ? (
          <TaskCreate onUpdate={handleSubmit} indexId={task.id} task={task} taskEdit={true} />
          ) : (
           <>
            <div className="card-header">
                <h4>{task.title}</h4>
            </div>
            <div className="card-content">
                {task.task}
            </div>
            <div className="card-footer">
                <button value={task.id} onClick={itemDelete}   className="task-list-button danger">Sil</button>
                <button value={task.id} onClick={handleEditChange}  className="task-list-button">Düzenle</button>
            </div>
          </>
          )
         }
        
        </div>
     );
   
}

export default TaskShow;