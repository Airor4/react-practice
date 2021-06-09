//import styles from './UserList.module.css';
import User from './User';
import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {

  return (
    <Card className={styles.list}>
        {props.items.map((item) => <User name={item.name} age={item.age} key={item.id}/>)}
    </Card>
  );
}

export default UserList;