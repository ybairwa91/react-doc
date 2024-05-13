/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Fragment } from "react";
const quotes = [
  "Don’t let yesterday take up too much of today.” — Will Rogers",
  "Ambition is putting a ladder against the sky.",
  "A joy that's shared is a joy made double.",
];

export default function App() {
  return (
    <Fragment>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </Fragment>
  );
}

function FancyText({ title, text }) {
  return title ? <h1>{text}</h1> : <h3>{text}</h3>;
}

function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);

  const quote = quotes[index];

  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <Fragment>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </Fragment>
  );
}

function Copyright({ year }) {
  return <p className="small">©️ {year}</p>;
}
