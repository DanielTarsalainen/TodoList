import React from 'react';
import './App.css';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Todolist from './components/Todolist';
import Home from './Home';


function App() {

  const routes = ["/home", "/components/todolist"];

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <AppBar>
            <Tabs>
              <Tab label="Home" value={routes[0]} component={Link} to={routes[0]} />
              <Tab label="Todolist" value={routes[1]} component={Link} to={routes[1]} />
            </Tabs>
          </AppBar>
        </Route>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/components/todolist" component={Todolist} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;

