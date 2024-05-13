/* eslint-disable no-unused-vars */
export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}

// Using curly braces: A window into the JavaScript world

export function TodoListJsx() {
  const name = "Hedy Lamarr";
  return <h1>{name}&apos;s To Do List</h1>;
}

//
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
}

export function TodoListDate() {
  return <h1>Todo list for {formatDate(today)}</h1>;
}

export function TodoListStyle() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

//MAKE A BIG ONE

const person = {
  name: "Gregorio Y. Zara's ",
  avatar: "https://i.imgur.com/7vQD0fPs.jpg",
  description: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};
export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s To Do List</h1>
      <img className="avatar" src={person.avatar} alt={person.description} />;
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
