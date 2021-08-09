import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import{NavLink} from 'react-router-dom';

const Task = ({kelasagalu,onDelete,onGetById}) => {
    return (
        <div className="task">
            <h2>{kelasagalu.text}</h2>
            <h5>{kelasagalu.day}</h5>
            {/* <button id='del-btn' onClick={()=>{
                onDelete(kelasagalu.id)
            }}><FaTrashAlt/></button> */}
            <FaTrashAlt id='del-btn'
             onClick={()=>{
                onDelete(kelasagalu.id)
             }}
             
            />
            {/* <NavLink to={`/taskdetail/${kelasagalu.id}`} id='seemore' >See more</NavLink> */}
            
        </div>
    )
}

export default Task
