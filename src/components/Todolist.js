import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

const Todolist = () => {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0)
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    else
      alert('Choose a row that you want to delete');
  }

  const columns = [
    { headerName: "Description", field: "description", sortable: true, filter: true, floatingFilter: true },
    { headerName: "Date", field: "date", sortable: true, filter: true, floatingFilter: true },
    {
      headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true,
      cellStyle: params => params.value === 'High' ? { color: 'red' } : params.value === "Medium" ? { color: 'orange' } : { color: 'green' }
    }
  ];

  return (
    <div>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
      <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>

      <div className="ag-theme-material" style={{ width: '50%', height: '700px', margin: 'auto' }}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}
          rowSelection="single"
          ref={gridRef}
          onGridReady={params => gridRef.current = params.api}
          animateRows
        />
      </div>
    </div>
  );
};


export default Todolist;