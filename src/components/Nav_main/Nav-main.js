import React from 'react';
import N from './Nav-main.module.css';
import { NavLink } from 'react-router-dom';

function NavMain() {
   return (
    <nav className={N.navMain}>
        <ul className={N.nav}>
          <li><NavLink to="/profile" activeClassName={N.active}>Profile</NavLink></li>
          <li><NavLink to="/messages" activeClassName={N.active}>Messages</NavLink></li>
          <li><NavLink to="/users" activeClassName={N.active}>Users</NavLink></li>
          <li><NavLink to="/news" activeClassName={N.active}>News</NavLink></li>
          <li><NavLink to="/music" activeClassName={N.active}>Music</NavLink></li>
          <li><NavLink to="/settings" activeClassName={N.active}>Settings</NavLink></li>
        </ul>
      </nav>
   ) 
};

export default NavMain;