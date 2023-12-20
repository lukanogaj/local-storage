import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

/// Heading <component></component>

///////////////////////////////////
// const Heading = () => {
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [age, setAge] = useState('');
//   const [data, setData] = useState('');
//   // const [data, setData] = useState('');

//   let userInfo = '';
//   const toggleGetData = () => {
//     setData(true);
//     userInfo = JSON.parse(localStorage.getItem('userInfo'));

//     setName(userInfo.Name);
//     setSurname(userInfo.Surname);
//     setAge(userInfo.Age);
//   };
//   return (
//     <div className={styles.heading}>
//       <h2>User Info</h2>
//       <div>
//         <button style={{ marginRight: '5px' }} onClick={toggleGetData}>
//           Get Data
//         </button>
//         {/* <button onClick={toggleEditData}>Edit Data</button> */}
//         {data && (
//           <>
//             <div to>
//               <div>{name}</div>
//               <div> {surname}</div>
//               <div> {age}</div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

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

  ///////////////////////////
  const counter = '';
  useEffect(() => {
    console.log('Counter value: ', counter);
  }, [counter]);
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
              // toggleGetData();
            }}
          >
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

// const [data, setData] = useState(false);
// const [editData, setEditData] = useSta0te(true);
// console.log(editData);
