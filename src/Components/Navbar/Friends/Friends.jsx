import styles from './Friends.module.css';
import Friend from './Friend/Friend';
const COUNT_OF_FRIENDS_TO_SHOW = 3;

const Friends = (props) => {
  const getFriendNameById = (userId) => props.users.find(user => user.id === userId).name;
  const friendsList = props.friends.slice(0, COUNT_OF_FRIENDS_TO_SHOW).map((friend, i) => <Friend userId={friend.userId} name={getFriendNameById(friend.userId)} key={`friend` + i}/>);
  return (
    <article className={styles.sideBarFriends}>
      <ul>
        {friendsList}
      </ul>
    </article>
  );
}

export default Friends;
