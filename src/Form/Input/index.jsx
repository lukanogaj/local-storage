import { useState, useEffect } from 'react';
import styles from './index.module.scss';
// import { labels } from '../../data';

const Input = () => {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem('userName');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || '';
  });

  useEffect(() => {
    localStorage.setItem('Username', JSON.stringify(userName));
  }, [userName]);

  return (
    <div>
      <form className={styles.forms} onSubmit={(e) => e.preventDefault()}>
        <span>Name</span>
        <input
          type='text'
          value={userName}
          placeholder='Name'
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type='submit' value='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
