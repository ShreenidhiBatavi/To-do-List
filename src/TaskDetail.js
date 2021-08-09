import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

const TaskDetail = () => {
 const [singletask,setSingletask]=useState([])
 
  const {id}=useParams()
  useEffect(()=>{
    getById({id})
 },[])
    const getById = async ()=>{
        const res= await fetch(`http://localhost:5000/tasks/${id}`,{
          method:'GET'
        });
         
        const data = await res.json()
      
       
        setSingletask(data)

        
      }
      console.log(singletask)
     
    return (
        <div>
             {/* {singletask.map((single)=>{ */}
              <>
                 <div className='taskdeatil'>
              <h1 style={{textAlign:'center'}}>{singletask.text}</h1>
              <h1 style={{textAlign:'center'}}>{singletask.day}</h1>
              <br/><br/><br/><br/>
              <h1 id='para'>{singletask.para}</h1>
            </div>
              </>
           
            {/*  */}
            
        </div>
    )
}

export default TaskDetail;
