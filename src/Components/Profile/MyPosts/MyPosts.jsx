import React from 'react';
import Post from './Post/Post.jsx';
import styles from './MyPosts.module.css';
import NewMessageForm from '../../FormComponents/NewMessageForm/NewMessageForm.jsx';

const MyPosts = (props) => {
  const posts = props.data.map((post, i) => <Post text={post.text} likesCount={post.likesCount} key={`post` + i} />);
  return (
    <section className={styles.myPosts}>
      <h2>My Posts</h2>
      <NewMessageForm getState={props.getFormNewMessage} updateState={props.updateFormNewMessage} proceedMessage={props.addNewPost}/>
      <div>
        {posts}
      </div>
    </section>
  )
}

export default MyPosts;
