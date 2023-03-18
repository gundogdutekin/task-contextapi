import TaskShow from "./TaskShow";

function TaskList({tasks}) {
  
    return ( 
        <div className="task-list">
             <h3>Görevler</h3>
             <div className="container">
     
         {
            tasks.map((item,index) => {
             return(
                <TaskShow key={index} task={item} />
             )  
            })
         }
           
          </div>
        </div>
     
     );
}

export default TaskList;