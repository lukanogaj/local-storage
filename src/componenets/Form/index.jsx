import styles from './index.module.scss';
import { useState, useEffect } from 'react';

const Form = ({ toggleGetData }) => {
  return (
    <div className={styles.hero}>
      <Heading />
      <Input toggleGetData={toggleGetData} />
    </div>
  );
};

// The top div with the heading and stored data
const Heading = () => {
  // const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  // const [data, setData] = useState('');

  let userInfo = '';
  const toggleGetData = () => {
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setName(userInfo.Name);
    setSurname(userInfo.Surname);
    setAge(userInfo.Age);
  };

  ///  try to use useEffect to show data back

  useEffect(() => {
    toggleGetData();
  });

  return (
    <div className={styles.heading}>
      <h2>User Info</h2>
      <div>
        <div>
          <div>{name}</div>
          <div> {surname}</div>
          <div> {age}</div>
        </div>
      </div>
    </div>
  );
};

// Input div with all the data to submit
const Input = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  // const [data, setData] = useState('');

  ///  Function for submit form and store in local storage
  const handleSubbmission = () => {
    localStorage.clear('userInfo');
    let userData = {
      Name: name,
      Surname: surname,
      Age: age,
    };

    localStorage.setItem('userInfo', JSON.stringify(userData));
    alert('Data recorded');
    window.location.reload();
  };

  ////////////////////////////

  // Function to get items back and show in divs

  return (
    <div className={styles.form}>
      <div>
        <div>
          <span>Name </span>
          <input
            type='text'
            // name={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>Surname </span>
          <input
            type='text'
            // name={surname}
            placeholder='Surname'
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <span>Age</span>
          <input
            type='text'
            name={age}
            placeholder='Age'
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            type='submit'
            onClick={() => {
              handleSubbmission();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
