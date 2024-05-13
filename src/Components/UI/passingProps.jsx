/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Communicating between two parents and child components use prop brother

// Props are the information that you pass to a JSX tag.
// For example, className, src, alt, width, and height are some of the props you can pass to an <img>:
// these are predefined props
// you can customize your own and most of them we will do the same

// props are the only argument to your component!
//we basically destruct in argument itself for ease
// React component functions accept a single argument, a props object:
//props are read only game

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      //   src="https://i.imgur.com/1bX5QH6.jpg"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile() {
  return (
    <div>
      <Avatar
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        size={100}
      />
      <Avatar person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} size={80} />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

//Understand prop drilling concept

// suppose
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Profile person={}, size={}, isSepia={}, thickBorder={} />
//   </React.StrictMode>
// );

export function ProfileProps({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

//how to avoid such repetitiveness
export function ProfilePropsAvoid(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

//this is wrong way,we have some another ways to do the same

export function ProfileSimple() {
  return <Card />;
}

function Card() {
  return (
    <div>
      <Avatar
        size={110}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </div>
  );
}

export function ProfileChildren() {
  return (
    <CardOne>
      <Avatar
        size={110}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </CardOne>
  );
}

function CardOne({ children }) {
  return <div>{children}</div>;
}



// export default function Profile({children}) {
//   return (
//     <div>
//       <Card>
//         {children}
//       </Card>
//     </div>
//   ); 
// }
// function Card(){
//   return (
//     <div>
//       <div className="card">
//         <div className="card-content">
//           <h1>Photo</h1>
//           <img
//             className="avatar"
//             src="https://i.imgur.com/OKS67lhm.jpg"
//             alt="Aklilu Lemma"
//             width={70}
//             height={70}
//           />
//         </div>
//       </div>
      
//       <div className="card">
//         <div className="card-content">
//           <h1>About</h1>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </div>
//       </div>

// </div>
//       )
// }