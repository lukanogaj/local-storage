import styles from './index.module.scss';
import { useState, useEffect } from 'react';

const Forms = () => {
  const [items, setItems] = useState([]);

  // useEffect do locale storage
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(items));
  }, [items]);
  ////////////////////////

  return (
    <div className={styles.hero}>
      <h1>Locale Storage</h1>
      <div className={styles.forms}>
        <label type='text' htmlFor=''>
          {' '}
          Name
        </label>
        <input type='text' />
        <label htmlFor=''> Surname</label>
        <input type='text' />
        <label htmlFor=''>Age</label>
        <input type='text' />

        <button type='submit' value='submit'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Forms;
