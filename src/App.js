import  react,{useState,useEffect} from 'react';
 
import Addtask from './Addtask';
import Header from "./Header";
import Tasks from "./Tasks";
import TaskDetail from './TaskDetail';
import {Route, Router, Switch } from 'react-router-dom';



function App() {
  const [tasks, setTasks] = useState([])
   
  useEffect(() => {
       fetchTask()
      
    },[])

 
  // fetch tasks
  const fetchTask = async ()=>{
     const res= await fetch('http://localhost:5000/tasks');
   
     const data = await res.json()
     console.log(data)
     console.log(res)
     setTasks(data)
  }


  
 
// delete task
const deleteTask =async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method:'DELETE'
  })
  setTasks(tasks.filter((task)=>(
    task.id !== id
  )))

}

// Add new task
const addTask=(text)=>{
 
  // // const day=day
  const id = Math.floor(Math.random()*10000)+1
  console.log(tasks.length)
  console.log(id)
  const newTask={id,...text}
  setTasks([...tasks,newTask])
   console.log(newTask)
   console.log(tasks)
  
}
  return (
    <div className="App">
      
     {/* <Tasks 
     kelasa={tasks} 
     onDelete={deleteTask}
     /> */}
      <Switch>


     


        <Route exact path="/" 
        render={()=>
          <>
          <Addtask onAdd={addTask}/>
        <Tasks 
        kelasa={tasks} 
        onDelete={deleteTask}
        
        />
        </>
      }
        />
        
      
      
      <Route exact path="/taskdetail/:id" component={TaskDetail}/> 
      
      </Switch>
      
     
    </div>
  );
}

export default App;
