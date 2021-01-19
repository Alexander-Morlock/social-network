import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const imgUrl = `/img/avatar-` + props.user.id + `.png`;
  return (
    <div>
      <div className={styles.cover}></div>
      <div className={styles.avatarAndDescription}>
        <img src={imgUrl} alt='avatar' className={styles.userpic}/>
        <div className={styles.description}>
          <h3>{props.user.name}</h3>
          <p>{props.user.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
