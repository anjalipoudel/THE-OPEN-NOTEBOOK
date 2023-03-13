import React, { useState } from 'react';
import Chat from './chat';

// export default function test() {
//     const [color, setColor] = useState(true);
//     const colorChange = () => {
//         setColor(!color);
//     };
//     return (
//         <div onClick={colorChange} style={{ backgroundColor: color ? '[#7de3bb]' : 'red' }}>test</div>
//     )
//

// export default function test() {
//     const [firstName, setFirstName] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [submit, setSubmit] = useState('');
//     const firstNameChange = (e) => {
//         setFirstName(e.target.value);
//         // setFullName(e.target.value + ' ' + lastName);

//     };
//     const lastNameChange = (e) => {
//         setLastName(e.target.value);
//         // setFullName(firstName + ' ' + e.target.value);
//     };
//     const submitData = () => {
//         setSubmit(firstName + " " + lastName)

//     }

//     return (
//         <>
//             <div className='flex flex-col w-60'>
//                 <label>First Name:</label>
//                 <input onChange={firstNameChange} value={firstName} />

//                 <label>Last Name:</label>
//                 <input onChange={lastNameChange} value={lastName} />

//                 <button className='w-20 bg-purple-400 h-10' onClick={submitData}> SUBMIT</button>
//                 <p>Full Name: {submit}</p>
//                 {/* <p>Full Name: {fullName}</p> */}
//             </div>
//         </>
//     )


// }

