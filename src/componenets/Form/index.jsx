import styles from './index.module.scss';
import { useState, useEffect } from 'react';

const Form = ({ toggleGetData }) => {
  return (
    <div className={styles.hero}>
      <Heading toggleGetData={toggleGetData} />
      <Input />
    </div>
  );
};

const Heading = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

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
      <div>
        <h2 className={styles.head}>User Info</h2>
      </div>

      <div className={styles.data}>
        <div className={styles.user}>
          <div> Name:</div>
          <div> Surname:</div>
          <div> Age:</div>
        </div>
        <div className={styles.userData}>
          <div>{name}</div>
          <div>{surname}</div>
          <div>{age}</div>
        </div>
      </div>
    </div>
  );
};
/////////////////////////

// Input div with all the data to submit
const Input = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  // const [data, setData] = useState('');

  ///  Function for submit form and store in local storage
  const handleSubbmission = () => {
    localStorage.clear();
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
        <div className={styles.enteredDate}>
          <span> Name</span>
          <input
            type='text'
            // name={name}
            placeholder='John'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.enteredDate}>
          <span>Surname </span>
          <input
            type='text'
            // surname={surname}
            placeholder='Handsome'
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className={styles.enteredDate}>
          <span>Age</span>
          <input
            type='text'
            // age={age}
            placeholder='41'
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type='submit' disabled={!name} onClick={handleSubbmission}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
