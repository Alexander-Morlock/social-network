import styles from './Friend.module.css';

const Friend = (props) => <li className={styles.sideBarFriend}><img src={'/img/avatar-' + props.userId + '.png'} alt='avatar'/>{props.name}</li>;

export default Friend;
