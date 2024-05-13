/*
using arrays filter and map method for our suitability

suppose we do have this list  with different list components
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>;

Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:

const listItems = chemists.map(person =>
 <li>...</li> // Implicit return!
);
However, you must write return explicitly if your => is followed by a { curly brace!

const listItems = chemists.map(person => { // Curly brace
 return <li>...</li>;
});


Where to get your key 
Different sources of data provide different sources of keys:

Data from a database: If your data is coming from a database, you can use the database keys/IDs,
 which are unique by nature.
Locally generated data:
 If your data is generated and persisted locally (e.g. notes in a note-taking app),
  use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
Keys must not change or that defeats their purpose! Don’t generate them while rendering.



Arrow functions containing => { are said to have a “block body”.
They let you write more than a single line of code, but you have to write a return statement yourself. 
If you forget it, nothing gets returned!

import { recipes } from './data.js';
import {Fragment} from "react"

export default function RecipeList() {
  const listItems=recipes.map(recipie=>{
    return (
      <Fragment key={recipie.id}>
      <h1>{recipie.name}</h1>
      <ul><li>{recipie.ingredients}</li></ul>
      </Fragment>
    )
  })
  return (
    <div>{listItems}</div>
  );
}




*/

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

export const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export function List() {
//   const chemist = people.filter((person) => person.profession === "chemist");

  const listItems = people.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b>
          {" " + person.profession + " "} known for {person.accomplishment}
        </p>
      </li>
    );
  });

  //return it
  return <ul>{listItems}</ul>;
}
