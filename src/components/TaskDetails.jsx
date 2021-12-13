import React from 'react';
import { useParams } from 'react-router';
import Button from './Button';
import { useNavigate } from 'react-router';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams()
  const { taskTitle } = params;

  const history = useNavigate();

  const handleClick = () => {
    history("/")
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleClick}> Voltar </Button>
      </div>
      <div className="task-details-container">
        <h2>{taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde non harum placeat illum ad!
        </p>
      </div>
    </>
  );
}
 
export default TaskDetails;