import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    <nav className="ui raised very padded segment" id="nav-bar">
        <Link className="ui inverted segment" to="/">React Tutorials</Link>
        <div className="ui right floated header">
            <NavLink className="ui button" to="/">Home</NavLink>
            <NavLink className="ui button" to="/users">Api Tutorial</NavLink>
            <NavLink className="ui button" to="/to-do-list">To Do List Tutorial </NavLink>
        </div>
    </nav>
);

export default NavBar;