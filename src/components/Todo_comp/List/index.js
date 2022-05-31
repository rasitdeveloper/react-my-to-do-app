import React from 'react'
import "../style.css"

function List({ tasks }) {
  return (
    <div>
        <ul className='list'>
          {
            tasks.map((task, i) => (
              <li key={i}>
                <span>{task.task}</span>
                <span><button>X</button></span>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default List