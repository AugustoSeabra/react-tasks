import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from 'axios'

import "./App.css"

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import TaskDetails from "./components/TaskDetails"

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleTaskAdd = taskTitle => {
    const newTask = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ]

    setTasks(newTask)
  }

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) task.completed = !task.completed
      return task
    })

    setTasks(newTasks)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.cypress.io/todos?_limit=10`)
      if(data && data.length) setTasks(data)
    }
    fetchTasks()
  }, [])
  
  const handleRemoveTask = taskId => {
    const newTasks = tasks.filter(({ id }) => id !== taskId)
    setTasks(newTasks)
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={
            <>
              <AddTask handleTaskAdd={handleTaskAdd} />
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDelete={handleRemoveTask}
              />
            </>
          }/>
          <Route path="/:taskTitle" exact element={
            <TaskDetails />
          }
            
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App