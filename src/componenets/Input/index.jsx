import { useState } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  // const [data, setData] = useState(false);
  // const [editData, setEditData] = useSta0te(true);
  // console.log(editData);

  ///  Function for submit form and store in local storage
  const handleSubbmission = () => {
    // localStorage.clear();
    let userData = {
      Name: name,
      Surname: surname,
      Age: age,
    };
    localStorage.setItem('userInfo', JSON.stringify(userData));
    alert('Data recorded');
    window.location.reload();
  };

  // let userInfo = '';
  // const toggleGetData = () => {
  //   setData(true);
  //   userInfo = JSON.parse(localStorage.getItem('userInfo'));

  //   setName(userInfo.Name);
  //   setSurname(userInfo.Surname);
  //   setAge(userInfo.Age);
  // };

  // function toggleEditData() {
  //   setEditData(true);
  //   console.log(editData);
  // }
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
          <button type='submit' onClick={handleSubbmission}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  setName: PropTypes.func,
};

export default Input;
