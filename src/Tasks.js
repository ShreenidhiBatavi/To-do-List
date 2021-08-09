import React from 'react';
import Task from './Task';



function Tasks({kelasa,onDelete,onGetById}) {
    return (
        <>
        {kelasa.map((a)=>(
        
            <Task  kelasagalu={a} onDelete={onDelete} onGetById={onGetById}/>
            

    ))}
            
        </>
    )
}

export default Tasks
