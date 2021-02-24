import React, { useState } from 'react';

function Todolist() {

  const [item, setItem] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, item]);
    setTitle(<tr><th>Description</th><th>Title</th></tr>);
  }

  const inputChanged = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2> Minimalistic todo-list</h2>
      </div>
      <div>
        <form onSubmit={addTodo}>
          <fieldset>
            <legend>Add todo:</legend>
            <label>Description: </label>
            <input type="text" name="description" value={item.description} onChange={inputChanged} />
            <label>Date: </label>
            <input type="text" name="date" value={item.date} onChange={inputChanged} />
            <input type="submit" value="Add" />
          </fieldset>
        </form>
      </div>
      <table>
        <tbody>
          {title}
          {todos.map((item, index) =>
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td><button value={index} onClick={e => removeTodo(e.target.value)}>Delete</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;