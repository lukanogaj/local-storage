// import { useState, useRef } from 'reacst';
import styles from './index.module.scss';
import { labels } from '../../data';

const Input = () => {
  // const inputRef = useRef(null);

  return (
    <form className={styles.forms}>
      {labels.map((label) => (
        <div>
          <span></span>
          <input type='text' placeholder={label} label={label} />
        </div>
      ))}
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
  );
};

export default Input;
