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
  const [data, setData] = useState(false);
  const [editData, setEditData] = useState(true);
  console.log(editData);

  ///  Function for submit form
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

  let userInfo = '';
  function toggleGetData() {
    setData(true);
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo.Email);
    setName(userInfo.Name);
    setSurname(userInfo.Surname);
    setAge(userInfo.Age);
  }

  function toggleEditData() {
    setEditData(true);
    console.log(editData);
  }
  return (
    <div className={styles.form}>
      <div>
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
          <button type='submit' onClick={handleSubbmission}>
            Submit
          </button>
        </div>
      </div>

      <div>
        <div className='right-box' style={{ textAlign: 'center' }}>
          <button style={{ marginRight: '5px' }} onClick={toggleGetData}>
            Get Data
          </button>
          <button onClick={toggleEditData}>Edit Data</button>
          {data && (
            <>
              <div className='data'>
                <div> Name - {name}</div>
                <div> Email - {surname}</div>
                <div> Number - {age}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
