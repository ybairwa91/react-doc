/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
// export default function Button() {
//   return <button>i Don't do anything</button>;
// }

/*
here we pased the handleClick for the prop onClick in button component
using jsx

//only pass the event handle function and never call it at same instance
*/

// export default function Button() {
//   return (
//     <button
//       onClick={function () {
//         alert("you clicked me");
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// export default function Button() {
//   return (
//     <button
//       onClick={() => {
//         alert("you clicked me");
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// export function Button() {
//   function handleClick() {
//     alert("you clicked me");
//   }
//   return <button onClick={handleClick}>Click me</button>;
// }

// function AlertButton({ children, message }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// export function ToolBar() {
//   return (
//     <div>
//       <AlertButton message="Playing">play Movie</AlertButton>
//       <AlertButton message="Uploading">upload Movie</AlertButton>
//     </div>
//   );
// }

//passing event handler as prop

// function Buttons({ children }) {
//   function handleClick() {
//     alert(children);
//   }
//   return <button onClick={handleClick}>{children}</button>;
// }

// export function ToolBars() {
//   return (
//     <div>
//       <Buttons>Playing Kiki Delivery Service!</Buttons>
//       <Buttons>Upload Image</Buttons>
//     </div>
//   );
// }

export function Toolbars() {
  return (
    <div>
      <PlayButton movieName="Playing Kiki Delivery Service!" />
      <UploadButton />
    </div>
  );
}
function UploadButton() {
  function handleImage() {
    alert(`uploading Image`);
  }
  return <Button onClick={handleImage}>upload Image</Button>;
}

function PlayButton({ movieName }) {
  function handleMovie() {
    alert(`playing ${movieName}`);
  }
  return <Button onClick={handleMovie}>Play "{movieName}"</Button>;
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
//here understand that component like button does specify the styling but not its behavior
//in simple words the event onClick is passed from its Parent component to the button and not specify it button component itself
//for example here we create a prop event handler in PlayButton named onClick and pass handleMovie func and then pass it down to child
//we have a naming convention to define this names
//lets learn it

export function App() {
  return (
    <div>
      <Buttons onSmash={() => alert("Playing")}>Play Movie</Buttons>
      <Buttons onSmash={() => alert("Uploading")}>Upload Image</Buttons>
    </div>
  );
}

function Buttons({ children, onSmash }) {
  return <button onClick={onSmash}>{children}</button>;
}

//more interactive way
export function Apps() {
  return (
    <Toolbaar
      onPlayMovie={() => alert("playing")}
      onUploadImage={() => alert("uploading")}
    />
  );
}

function Toolbaar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

// function Button({ children, onClick }) {
//   return <button onClick={onClick}>{children}</button>;
// }

//EVENT PROPOGRATION

export function EventPropagation() {
  return (
    <div
      style={{ backgroundColor: "grey" }}
      onClick={() => alert("You clicked on the Bar")}
    >
      <button onClick={() => alert("playing")}>Play Movie</button>
      <button onClick={() => alert("uploading")}>Upload Image</button>
    </div>
  );
}

//how to stopPropagation

export function StopPropagation() {
  return (
    <div
      style={{ backgroundColor: "grey" }}
      onClick={() => alert("You clicked on the Bar")}
    >
      <Buttonn onClick={() => alert("playing")}>Play Movie</Buttonn>
      <Buttonn onClick={() => alert("uploading")}>Upload Image</Buttonn>
    </div>
  );
}
function Buttonn({ children, onClick }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

//A better approach

export function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("submitting");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
