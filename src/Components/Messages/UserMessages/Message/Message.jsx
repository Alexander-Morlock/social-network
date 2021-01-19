import React from 'react';
import styles from './Message.module.css'

const Message = (props) => {
  return (
    <div className={styles.message + (props.userId === props.thisUserId ? ` ` + styles.messageToTheRight : ``)}>
      <img src={'/img/avatar-' + props.userId + '.png'} alt='avatar'/>{props.text}
    </div>
  )
}

export default Message;
