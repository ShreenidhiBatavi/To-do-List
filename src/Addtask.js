import React,{useState} from 'react';


const Addtask = ({onAdd}) => {
const [text,setText]=useState('');
const [day,setDay]=useState('');
const onSubmit=(e)=>{
    e.preventDefault();
    onAdd({text,day})
    setText('')
    setDay('')
    console.log('no clear')

}
    return (
        <>
        
        <form onSubmit={onSubmit}>
        <input type='text'
         placeholder='Add Task !' 
         value={text}
         autocomplete='off'
         onChange={(e)=>{setText(e.target.value)}}
         id='input'/>

         <input type='text'
         placeholder='Add Day !' 
         value={day}
         autoComplete='off'
         onChange={(e)=>{setDay(e.target.value)}}
         id='input-day'/>
        <input id='add-btn' 
           value='Add Task'
          type='submit'/>
        </form>
            
        </>
    )
}

export default Addtask
