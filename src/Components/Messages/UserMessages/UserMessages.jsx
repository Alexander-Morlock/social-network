import React from 'react';
import Message from './Message/Message';
import styles from './UserMessages.module.css';

const UserMessages = (props) => {
  const messages = props.data.filter(message => message.userId === props.getIdUrl()).map((message, i) => <Message text={message.text} userId={message.type===`in` ? message.userId : props.thisUserId} key={`message` + i} thisUserId={props.thisUserId}/>);
  return (
    <div className = { styles.userMessages }>
      {messages}
    </div>
  )
}

export default UserMessages;
