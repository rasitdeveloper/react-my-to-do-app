import React from 'react'
import "../style.css"

function List({ setTask, tasks }) {


  const deleteTask = (e) => {
    
    const newTasks = tasks.filter((item) => {
      return !Object.keys(item).some((key) => 
        item[key].toString().toLowerCase().includes(tasks[e.target.id].task)
      );
    });
    
    setTask(newTasks)

  }


  return (
    <div>
        <ul className='list'>
          {
            tasks.map((task, i) => (
              <li key={i}> <span>{task.task}</span> <span><button id={i} onClick={deleteTask}>X</button></span>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default List