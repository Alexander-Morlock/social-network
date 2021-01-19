import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css';

const Dialog = (props) => {
  const path = "/messages/" + props.id;
  const backGroundIfUrl = ' ' + (props.getIdUrl() === props.id ? styles.selected : '');

  return (
    <div className = { styles.dialog + backGroundIfUrl }>
      <NavLink to={path}><img src={'/img/avatar-' + props.id + '.png'} alt='avatar'/>{props.user}</NavLink>
    </div>
  )
}

export default Dialog;
