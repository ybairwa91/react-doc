/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
//UPDATING ARRAY
//IF U USE ARRAY AS AN INITIALIZE VARIABLE
//MAKE SURE MUTATE IS USING SETTER FUNCTION ONLY

//MUTATING ARRAY INCLUDES
// ADDING AN ELEMENT
// REMOVING AN ELEMENT
// REPLACING AN ELEMENT
// SORTING AN ELEMENT

//DON'T USE OPERATION THAT MUTUATE ORIGINAL ONE
//for example use slice over splice

//for adding element
// adding ===>	 push, unshift(❌)	 VS  concat, [...arr] spread syntax ✔
// removing ===>   pop,shift,splice      VS filter,slice
// replacing ===> splice, arr[i]= ..assignment VS map
// sorting ===> reverse,sort()          VS  copy array first

import { useState, Fragment } from "react";

////////////////////////ADDING ELEMENT IN ARRAY/////////////////////

let nextId = 0;
//ye component ke bahar hai update hoga hi
// render sirf component hote h remember it
// and let hai to

// function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <Fragment>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {

//           artists.push({
//             id: nextId++,
//             name: name,
//           });
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </Fragment>
//   );
// }

//ADD IN LAST
// function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <Fragment>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </Fragment>
//   );
// }

// TO ADD IN FIRST
function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <Fragment>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([{ id: nextId++, name: name }, ...artists]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

//////////////////////REMOVING AN ELEMENT FROM AN ARRAY/////////////////

//filter method is one such useful

let initialArtists = [
  {
    id: 0,
    name: "youboy",
  },
  {
    id: 1,
    name: "youshoy",
  },
  {
    id: 2,
    name: "yousty",
  },
];

function ArrayListTransform() {
  const [artists, setArtist] = useState(initialArtists);

  return (
    <Fragment>
      <h1>Inspiring Personality</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button
              onClick={() =>
                setArtist(artists.filter((a) => a.id !== artist.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

//////////////////////////////
//TRANSFORM AN ARRAY
let initialStage = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialStage);
  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <Fragment>
      <button onClick={handleClick}>Move circles Down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </Fragment>
  );
}

const demoArray = [
  { id: 0, name: "Yogesh", age: 24 },
  { id: 1, name: "Nitesh", age: 21 },
  { id: 2, name: "Hriday", age: 24 },
];

function TransformArray() {
  const [info, setInfo] = useState(demoArray);

  function handleClick() {
    const newVal = info.map((ele) => ({ ...ele, age: ele.age + 10 }));
    setInfo(newVal);
  }

  return (
    <Fragment>
      <h1>Our alumni info's when doing sophomore</h1>
      {info.map((ele) => (
        <Fragment key={ele.id}>
          <h1>
            {ele.name}--{ele.age}
          </h1>
        </Fragment>
      ))}
      <button onClick={handleClick}>Age as of now</button>
    </Fragment>
  );
}

/////////+++INSERTION INTO AN ARRAY At Specific Index+++/////////
let id = 3;
const initialPainters = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
function ListInsertion() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialPainters);

  function handleClick() {
    const insertAt = 3;
    const nextPaint = [
      ...artists.slice(0, insertAt),
      { id: id++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextPaint);
  }

  return (
    <Fragment>
      <h1>Inspiring paintings</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

///////+++Replacing items in an array++++///////////////
let initialCounters = [0, 0, 0];

function CounterList() {
  const [counters, setCounters] = useState(initialCounters);
  function handleIncrement(index) {
    const nextCounters = counters.map((c, i) => {
      if (i == index) return c + 1;
      else return c;
    });
    setCounters(nextCounters);
  }
  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter} <button onClick={() => handleIncrement(i)}>+1</button>
        </li>
      ))}
    </ul>
  );
}

//////SORTING////////////////

const initialSortList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

function ListSorting() {
  const [list, setList] = useState(initialSortList);
  function handleReverse() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <Fragment>
      <button onClick={handleReverse}>Reverse</button>

      <ul>
        {list.map((l) => (
          <li key={l.id}>{l.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

/////////////UPDATING OBJECT INSIDE AN ARRAY///////////////////

let ID = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

function BucketList() {
  return (
    <Fragment>
      <h1>Art Bucket List</h1>
      <h2>My List of art to see:</h2>
      <ItemList />
      <h2>Your List of art to see:</h2>
      <ItemList />
    </Fragment>
  );
}

function ItemList() {
  return (
    <ul>
      {initialList.map((ele) => (
        <li key={ele.id}>
          <label>
            <input type="checkbox" checked={ele.seen} />
            {ele.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

////////////////q1/////////////////////////

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : { ...product }
      )
    );
  }

  function handleDecreaseClick(productId) {
    let newProduct = products.map((product) => {
      if (productId === product.id) {
        return { ...product, count: product.count - 1 };
      } else {
        return product;
      }
    });
    newProduct = newProduct.filter((product) => product.count > 0);
    setProducts(newProduct);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return <ShoppingCart />;
}
