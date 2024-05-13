/* eslint-disable react/prop-types */
//React is designed around this concept. React assumes that every component you write is a pure function.
//This means that React components you write must always return the same JSX given the same inputs

//Simple example to depict about pure component
function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export function App() {
  return (
    <section>
      <h1>Special Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

/*

let guest = 0;
function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function Teaset() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

*/

//Solution

function Cup({ guest }) {
  //   guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function Teaset() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

function Cups({ guest }) {
  return <h2>Tea cup for the guest #{guest}</h2>;
}

export function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cups key={i} guest={i} />);
  }
  return cups;
}

//Q.1
// This component tries to set the <h1>’s CSS class to "night" during the time from midnight to six hours in the morning,
//and "day" at all other times. However, it doesn’t work. Can you fix this component?

// You can verify whether your solution works by temporarily changing the computer’s timezone.
//When the current time is between midnight and six in the morning, the clock should have inverted colors!

// export default function Clock({ time }) {
//   let hours = time.getHours();
//   if (hours >= 0 && hours <= 6) {
//     document.getElementById("time").className = "night";
//   } else {
//     document.getElementById("time").className = "day";
//   }
//   return <h1 id="time">{time.toLocaleTimeString()}</h1>;
// }

