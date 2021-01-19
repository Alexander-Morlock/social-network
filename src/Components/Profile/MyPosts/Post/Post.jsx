import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <p className={styles.postMessage}>{props.text}</p>
      <div className={styles.likes}><p>{props.likesCount}</p></div>
    </div>
  )
}

export default Post;
