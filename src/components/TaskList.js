import TaskShow from "./TaskShow";

function TaskList({editHidden,handleDelete,tasks, onUpdate}) {
  
    return ( 
        <div className="task-list">
             <h3>Görevler</h3>
             <div className="container">
     
         {
            tasks.map((item,index) => {
             return(
                <TaskShow key={index}  onUpdate={onUpdate} editHidden={editHidden} indexId={index}  deleteItem={handleDelete}  task={item} />
             )  
            })
         }
           
          </div>
        </div>
     
     );
}

export default TaskList;