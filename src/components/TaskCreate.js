import { useState } from "react";
function TaskCreate({onCreate,onUpdate,indexId,task,taskEdit}) {

    const [titlee, setTitle] = useState(task?task.title:"")
    const [taske, setTask] = useState(task?task.task:"")
    
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleTask = (e) => {
        setTask(e.target.value)   
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(taskEdit){
         onUpdate(e.target.value,titlee,taske)
        
        }else{
         onCreate(titlee,taske)
        }
        setTitle("")
        setTask("")
        
    }
    /*const handleEditSubmit = (e) => {
        e.preventDefault()
        onEdit(indexId,title,task)
        setTitle("")
        setTask("")
        
    }*/
    return ( 
        <>
        {taskEdit?( 
        <div className="task-edit">  
            <h4>Lütfen Taskı Düzenleyiniz</h4>          
            <label>Başlık</label>
            <input value={titlee} onChange={handleTitle} className="task-input"/>
            <label>Task Giriniz</label>
            <textarea value={taske} onChange={handleTask} className="task-input"/>
            <div className="button-group">
                <button value={indexId} onClick={handleSubmit} className="task-button flex-graw-3">Güncelle</button>
                <button onClick={handleSubmit} className="task-button danger flex-graw-1">İptal</button>
            </div>
            
        
        </div>):(
        <div className="task-create">
            <h3>Lütfen Task Ekleyiniz</h3>
            <label>Başlık</label>
            <input value={titlee} onChange={handleTitle} className="task-input"/>
            <label>Task Giriniz</label>
            <textarea value={taske} onChange={handleTask} className="task-input"/>
            <button onClick={handleSubmit} className="task-button">Oluştur</button>
        
        </div>
        )}
        </>
        
     );
}

export default TaskCreate;