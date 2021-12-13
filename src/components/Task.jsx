import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Task.css'

const Task = ({ taskId, taskTitle, isCompleted, handleTaskClick, handleRemoveTask }) => {
  const history = useNavigate()

  const handleTaskDetailsClick = () => {
    history(`/${taskTitle}`)
  }

  return ( 
    <div 
      className="task-container" 
      style={isCompleted ? {borderLeft: `6px solid chartreuse`} : {}} 
    >
      <div className="task-title" onClick={() => { handleTaskClick(taskId) }}>
        {taskTitle} 
      </div>
      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => { handleRemoveTask(taskId) }}>
          <CgClose />
        </button>
        <button className="see-task-details" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
}
 
export default Task;