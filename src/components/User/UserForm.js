import {useState} from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [error, setError] = useState();

  const submitHandler = function(event) {
    event.preventDefault();
    const name = event.target.name.value.replace(/^\w/, c => c.toUpperCase());
    const age = parseInt(event.target.age.value);
    
    if (name.trim().length === 0 || age.isNaN()) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a positive integer for the age field'
      });
      return;
    }
    const newUser = {
      name: name,
      age: age,
      id: Math.random().toString()
    };
    event.target.name.value = '';
    event.target.age.value = '';
    props.onAddUser(newUser);
  }
  const errorHandler = () => {
    setError(null);
  }
  return (
    <>
      {error && 
        <ErrorModal 
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      }
      <Card className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles.input}>
            <label>Name</label>
            <input name='name' type='text'/>
          </div>
          <div className={styles.input}>
            <label>Age (Years)</label>
            <input name='age' type='number'/>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default UserForm;