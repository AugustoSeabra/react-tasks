import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleRemoveTask }) => {
  return (
    <>
      {tasks.map(({ id, title, completed }, index) => {
        return (<Task key={index} taskId={id} handleTaskClick={handleTaskClick} handleRemoveTask={handleRemoveTask} taskTitle={title} isCompleted={completed} />)
      })}
    </>
  )
}

export default Tasks
