import { useRef } from 'react';
import styles from './index.module.scss';
import Form from '..';

const FormData = [
  { name: 'Name', surname: 'surname', age: 'age', button: 'Submit' },
  { name: 'Name', surname: 'surname', age: 'age', button: 'Submit' },
  { name: 'Name', surname: 'surname', age: 'age', button: 'Submit' },
];

const Input = () => {
  const data = useRef();
  const handleClick = (e) => {
    console.log(data.current.value, 'initial value');
    localStorage.setItem('inputValue', data.current.value);
    // e.preventDafult();
  };
  console.log(localStorage.getItem('inputValue'), '****');
  return (
    <div className={styles.form}>
      {FormData.map((item, index) => (
        <form key={index}>
          <span>{item.name}</span>
          <input type='text' placeholder={item.name} ref={data} />
          <button type='submit' onClick={handleClick}>
            {item.button}
          </button>
        </form>
      ))}
    </div>
  );
};

export default Input;
