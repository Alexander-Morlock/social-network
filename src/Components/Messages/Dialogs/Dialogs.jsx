import React from 'react';
import Dialog from './Dialog/Dialog';
import styles from './Dialogs.module.css'

const Dialogs = (props) => {
  const markup = props.data.map((user, i) => <Dialog user={user.name} id={user.id} key={i} getIdUrl={props.getIdUrl}/>);
  return (
    <div className={styles.dialogs} >
      {markup}
    </div >
  )
}

export default Dialogs;
