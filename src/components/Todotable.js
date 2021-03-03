import React from 'react';

function Todotable(props) {
  return (
    <div>
      <table>
        <tbody>
          <td><tr><h4>Description</h4></tr></td> <td><tr><h4>Date</h4></tr></td>
          {props.todos.map((item, index) =>
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td><button onClick={() => props.removeTodo(index)}>Delete</button></td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Todotable;
