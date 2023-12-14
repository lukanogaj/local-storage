import { useState } from 'react';
import styles from './index.module.scss';

// const FormData = [
//   { name: 'Name', surname: 'surname', age: 'age', button: 'Submit' },
//   { name: 'Name', surname: 'surname', age: 'age', button: 'Submit' },
//   { name: 'Name', surname: 'surname', age: 'age', button: 'Submit' },
// ];

const Input = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  // const [data, setData] = useState(false);
  const [editData, setEditData] = useState(false);
  console.log(editData);

  return (
    <div className={styles.form}>
      <form>
        <div>
          <span>Name </span>
          <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={editData ? name : ''}
          />
          <button type='submit'>Submit</button>
        </div>
        <div>
          <span>Surname </span>
          <input
            type='text'
            name='surname'
            placeholder='Surname'
            onChange={(e) => setSurname(e.target.value)}
            value={editData ? surname : ''}
          />
          <button type='submit'>Submit</button>
        </div>
        <div>
          <span>Age</span>
          <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={(e) => setAge(e.target.value)}
            value={editData ? age : ''}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
