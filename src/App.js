import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserList from './components/UserList';
import 'tachyons';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/to-do-list" component={ToDoList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
