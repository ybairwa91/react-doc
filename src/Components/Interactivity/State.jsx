//what is state:basically a component memory which stores current event

// suppose a component
// we want him to store some data and remember some of the things happened last time
// thinking of like we have a variable and we want to update it and want our component to remember the updated aspect even
// after innumerable re renders
// how will u do that

//that where states come into the picture

import { sculptureList } from "./data";
import { Fragment } from "react";

export function Gallery() {
  let index = 0;
  //phle baat local variable change krnee par component re-render hota hi nhi
  //dusri baat chalo handleClick se ho bhi gyaa to local variable values persist nhi krte renders ke beech me

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];

  return (
    <Fragment>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </Fragment>
  );
}

//problem samjh a gyi
//hume ek aisa variable chahiye jo renders ke beech me bhi value persist karee
//or ek mechanism jisse use update kr sakee

//bus phir kya hai useState yahi krta h

// The useState Hook provides those two things:

// A state variable to retain the data between renders.
// A state setter function to update the variable and trigger React to render the component again.

import { useState } from "react";

export function GalleryState() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];
  function handleClick() {
    setIndex(index + 1);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <Fragment>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <button onClick={handleShowMore}>
        {showMore ? "hide" : "show"} Details
      </button>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
    </Fragment>
  );
}
//state are isolated and definitely private

//q.1

export function GalleryQ1() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  

  function handleNextClick() {
    setIndex(index < 11 ? index + 1 : index);
    console.log(index);
  }

  function handlePrevious() {
    setIndex(index > 0 ? index - 1 : index);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <Fragment>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </Fragment>
  );
}
