import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import 'tachyons';

const App = () => {
  return (
    <BrowserRouter basename="/RobotFriends">
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/to-do-list" component={ToDoList} />
          <Route path="/users/:user" component={UserProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
