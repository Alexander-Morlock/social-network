import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import UserMessages from './UserMessages/UserMessages';
import styles from './Messages.module.css'
import NewMessageForm from '../FormComponents/NewMessageForm/NewMessageForm';
import { getIdUrl } from '../../utils';

const Messages = (props) => {
  return (
    <main>
      <section className={styles.messagesSection}>
        <h2 className={styles.header}>Messages</h2>
        <div className={styles.messages}>
          <Dialogs data={props.state.dialogs} getIdUrl={getIdUrl} />
          <div className={styles.messagesAndForm}>
            <UserMessages
              data={props.state.messages}
              thisUserId={props.thisUserId}
              getIdUrl={getIdUrl} />
            <NewMessageForm
              getState={props.state.getFormNewMessage}
              updateState={props.state.updateFormNewMessage}
              proceedMessage={props.state.addNewMessage}
              disabled={getIdUrl() ? false : true} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Messages;
