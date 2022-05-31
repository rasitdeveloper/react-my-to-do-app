import React, { useEffect, useState } from 'react'

import "./style.css"

import List from "./List"
import Form from "./Form"

function Todo_comp() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div id='container'>
      <h1>To Do App</h1>
      <Form addTask = {setTasks} tasks={tasks} />
      <List tasks = {tasks}/>
    </div>
  )
}

export default Todo_comp