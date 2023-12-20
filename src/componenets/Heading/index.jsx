// import { useState } from 'react';
// import styles from './index.module.scss';
// import PropTypes from 'prop-types';

// const Heading = ({ name, surname, age, setName, setSurname, setAge }) => {
//   const [data, setData] = useState('');

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

// Heading.propTypes = {
//   setName: PropTypes.func,
// };

// export default Heading;
