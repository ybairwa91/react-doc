/* eslint-disable no-unused-vars */
//treat state as read only always and dont try t to mutate it

import { Fragment, useState } from "react";

//see we can mutat object like this but u should not
//consider state variable as immutable and update using setter only
function UpdatingObject() {
  const [x, setX] = useState({ x: 0, y: 0 });
  x.x = 10;

  return <div>{x.x}</div>;
}

/////////////////////////////
//lets look into here
function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        // position.x = e.clientX;
        // position.y = e.clientY;
        // setPosition((x) => e.clientX);
        // setPosition((y) => e.clientY);
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

//form and object

// a wrong way
// function Form() {
//   const [person, setPerson] = useState({
//     firstName: "yogi",
//     lastName: "bairwa",
//     email: "email@email.com",
//   });
//   return (
//     <Fragment>
//       <label htmlFor="fname">FirstName</label>
//       <input
//         style={{ display: "block" }}
//         id="fname"
//         value={person.firstName}
//         onChange={(e) => person.firstName(e.target.value)}
//       ></input>
//       <label htmlFor="lname">LastName</label>
//       <input
//         style={{ display: "block" }}
//         id="lname"
//         value={person.LastName}
//         onChange={(e) => person.lastName(e.target.value)}
//       ></input>
//       <label htmlFor="email">Email</label>
//       <input
//         style={{ display: "block" }}
//         id="email"
//         value={person.email}
//         onChange={(e) => person.email(e.target.value)}
//       ></input>
//       <p>
//         {person.firstName}
//         {person.lastName}({person.email})
//       </p>
//     </Fragment>
//   );
// }

// //this is also wrong way brother
// function Form() {
//   const [person, setPerson] = useState({
//     firstName: "yogi",
//     lastName: "bairwa",
//     email: "email@email.com",
//   });
//   function handleFName(e) {
//     person.firstName = e.target.value;
//   }
//   function handleLName(e) {
//     person.lastName = e.target.value;
//   }
//   function handleEmail(e) {
//     person.email = e.target.value;
//   }

//   return (
//     <Fragment>
//       <label htmlFor="fname">FirstName</label>
//       <input
//         style={{ display: "block" }}
//         id="fname"
//         value={person.firstName}
//         onChange={handleFName}
//       ></input>
//       <label htmlFor="lname">LastName</label>
//       <input
//         style={{ display: "block" }}
//         id="lname"
//         value={person.lastName}
//         onChange={handleLName}
//       ></input>
//       <label htmlFor="email">Email</label>
//       <input
//         style={{ display: "block" }}
//         id="email"
//         value={person.email}
//         onChange={handleEmail}
//       ></input>
//       <p>
//         {person.firstName}
//         {person.lastName}({person.email})
//       </p>
//     </Fragment>
//   );
// }

//using setter function is recommended
//this is a good way
// //lets follow DRY principle and make it simple
// function Form() {
//   const [person, setPerson] = useState({
//     firstName: "yogi",
//     lastName: "bairwa",
//     email: "email@email.com",
//   });
//   function handleFName(e) {
//     setPerson({
//       firstName: e.target.value,
//       lastName: person.lastName,
//       email: person.email,
//     });
//   }
//   function handleLName(e) {
//     setPerson({
//       firstName: person.firstName,
//       lastName: e.target.value,
//       email: person.email,
//     });
//   }
//   function handleEmail(e) {
//     setPerson({
//       firstName: person.firstName,
//       lastName: person.lastName,
//       email: e.target.value,
//     });
//   }

//   return (
//     <Fragment>
//       <label htmlFor="fname">FirstName</label>
//       <input
//         style={{ display: "block" }}
//         id="fname"
//         value={person.firstName}
//         onChange={handleFName}
//       ></input>
//       <label htmlFor="lname">LastName</label>
//       <input
//         style={{ display: "block" }}
//         id="lname"
//         value={person.lastName}
//         onChange={handleLName}
//       ></input>
//       <label htmlFor="email">Email</label>
//       <input
//         style={{ display: "block" }}
//         id="email"
//         value={person.email}
//         onChange={handleEmail}
//       ></input>
//       <p>
//         {person.firstName}
//         {person.lastName}({person.email})
//       </p>
//     </Fragment>
//   );
// }

// function Form() {
//   const [person, setPerson] = useState({
//     firstName: "yogi",
//     lastName: "bairwa",
//     email: "email@email.com",
//   });
//   function handleFName(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value,
//     });
//   }
//   function handleLName(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value,
//     });
//   }
//   function handleEmail(e) {
//     setPerson({
//       ...person,
//       email: e.target.value,
//     });
//   }

//   return (
//     <Fragment>
//       <label htmlFor="fname">FirstName</label>
//       <input
//         style={{ display: "block" }}
//         id="fname"
//         value={person.firstName}
//         onChange={handleFName}
//       ></input>
//       <label htmlFor="lname">LastName</label>
//       <input
//         style={{ display: "block" }}
//         id="lname"
//         value={person.lastName}
//         onChange={handleLName}
//       ></input>
//       <label htmlFor="email">Email</label>
//       <input
//         style={{ display: "block" }}
//         id="email"
//         value={person.email}
//         onChange={handleEmail}
//       ></input>
//       <p>
//         {person.firstName}
//         {person.lastName}({person.email})
//       </p>
//     </Fragment>
//   );
// }

//another way to do the same
//lets use name property and change it dynamically

function Form() {
  const [person, setPerson] = useState({
    firstName: "yogi",
    lastName: "bairwa",
    email: "email@email.com",
  });
  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Fragment>
      <label htmlFor="fname">FirstName</label>
      <input
        name="firstName"
        style={{ display: "block" }}
        id="fname"
        value={person.firstName}
        onChange={handleChange}
      ></input>
      <label htmlFor="lname">LastName</label>
      <input
        name="lastName"
        style={{ display: "block" }}
        id="lastName"
        value={person.lastName}
        onChange={handleChange}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        style={{ display: "block" }}
        id="email"
        value={person.email}
        onChange={handleChange}
      ></input>
      <p>
        {person.firstName}
        {person.lastName}({person.email})
      </p>
    </Fragment>
  );
}

export function App() {
  return <Form />;
}
