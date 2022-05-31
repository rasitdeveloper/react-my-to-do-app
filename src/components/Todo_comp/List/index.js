import React from 'react'

function List({ tasks }) {
  return (
    <div>
        <ul>
          {
            tasks.map((task, i) => (
              <li key={i}>{task.task}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default List