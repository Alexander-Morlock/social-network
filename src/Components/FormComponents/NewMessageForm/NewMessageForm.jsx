import React from 'react';
import styles from './NewMessageForm.module.css';

const NewMessageForm = (props) => {

  const onChangeHandler = (evt) => {
    evt.preventDefault();
    props.updateState(evt.target.value);
  };

  const onClickHandler = (evt) => {
    evt.preventDefault();
    if (props.getState()) {
      props.proceedMessage();
    }
  };

  return document.location.pathname !== `/messages`
    ? (<form className={styles.newMessageForm}>
      <textarea onChange={onChangeHandler} value={props.getState()}/>
      <button onClick={onClickHandler} type="submit">Add</button>
    </form>)
    : (<div></div>);
};

export default NewMessageForm;
