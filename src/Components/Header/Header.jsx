import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerlogo}></div>
      <h1>Social network</h1>
    </header>
    )
}

export default Header;
