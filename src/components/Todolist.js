import React, { useState } from 'react';
import Todotable from './Todotable';

function Todolist() {

  const [item, setItem] = useState({
    description: '', date: ''
  });
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, item]);
    setTitle(<tr><th>Description</th><th>Date</th></tr>);
  }

  const inputChanged = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  }
  // ... tuo uusimman!

  const removeTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
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
            <input type="date" name="date" value={item.date} onChange={inputChanged} />
            <input type="submit" value="Add" />
          </fieldset>
        </form>
        <Todotable todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default Todolist;