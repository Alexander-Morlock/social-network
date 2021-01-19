import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navigation}>
        <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/messages">Messages</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/music">Music</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
      <Friends friends={props.friends} users={props.users}/>
    </div>
  )
}

export default Navbar;
