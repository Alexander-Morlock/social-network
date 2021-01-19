import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main>
      <section>
        <ProfileInfo user={props.thisUser} />
        <MyPosts
        data={props.state.posts}
        getFormNewMessage={props.state.getFormNewMessage}
        updateFormNewMessage={props.state.updateFormNewMessage}
        addNewPost={props.state.addNewPost} />
      </section>
    </main>
  )
}

export default Profile;
