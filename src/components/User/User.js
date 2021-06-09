import styles from './User.module.css';

const User = (props) => {
  return (
    <div className={styles.userDiv}>
      {props.name} ({props.age} years old)
    </div>
  );
}

export default User;
