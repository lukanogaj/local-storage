import styles from './index.module.scss';
import { useState, useEffect } from 'react';

const Forms = () => {
  // Set of data
  const [name, setName] = useState('');

  // const [items, setItems] = useState([]);

  // // useEffect do locale storage
  useEffect(() => {
    // storing Input name
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  // ////////////////////////

  console.log(localStorage.getItem('name'));

  return (
    <div className={styles.hero}>
      <h1>Locale Storage</h1>
      <form className={styles.forms}>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        {/* <label htmlFor=''> Surname</label>
        <input
          type='text'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor=''>Age</label>
        <input type='text' /> */}
        <button type='submit' value='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
