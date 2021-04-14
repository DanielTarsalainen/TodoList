import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



const Todolist = () => {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const copy = [...todos, null];

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const clearState = () => {
    setTodos([]);
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0)
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    else
      alert('Choose a row that you want to delete');
  }

  const handleDateChange = (date) => {
    setTodo({ ...todo, date: date.toISOString() })
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
    <div style={{ marginTop: "7vh" }}>
      <TextField
        style={{ margin: 5 }}
        label="Description"
        onChange={inputChanged}
        name="description"
        value={todo.description}
      />

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker style={{ margin: 21 }} format="dd.MM.yyyy" value={todo.date} onChange={handleDateChange}>
        </DatePicker>
      </MuiPickersUtilsProvider>

      <TextField
        style={{ margin: 5 }}
        label="Priority"
        onChange={inputChanged}
        name="priority"
        value={todo.priority}
      />
      <Button style={{ marginTop: 15 }} variant="contained" color="primary" onClick={addTodo}>Add</Button>
      <Button style={{ marginTop: 15 }} variant="contained" color="secondary" onClick={deleteTodo}>Delete</Button>
      <Button style={{ marginTop: 15 }} variant="contained" color="warning" onClick={clearState}>Clear All</Button>


      <div className="ag-theme-material" style={{ width: '40%', height: '700px', margin: 'auto' }}>
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