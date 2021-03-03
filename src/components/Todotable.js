import React from 'react';

function Todotable(props) {
  return (
    <div>
      <table>
        <tbody>
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
