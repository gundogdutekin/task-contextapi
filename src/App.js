import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import {useEffect,useContext } from 'react';
import TaskContext from './context/tasks';


function App() {
  const { tasks,listTasks} = useContext(TaskContext)
  
   useEffect(() => {
    listTasks()
   }, [])
   

  return (
    <div className="App">
      <TaskCreate />
      <TaskList tasks={tasks} />
    
   </div>
   
  );
}

export default App;
