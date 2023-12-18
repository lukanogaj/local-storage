import styles from './index.module.scss';
import { useState } from 'react';
import Input from '../Input';
import Heading from '../Heading';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  return (
    <div className={styles.hero}>
      <Heading
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        age={age}
        setAge={setAge}
      />
      <Input />
    </div>
  );
};

export default Form;
