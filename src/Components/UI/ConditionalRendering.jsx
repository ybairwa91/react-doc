/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//suppose u want to render different things from component depends on different cases
//we use basically && || and ternary ?:

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride Packing List</h1>
      <ul>
        <Item name="Space suit" isPacked={true} />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + "✔"}</del>;
  }
  return <li>{itemContent}</li>;
}

// if (isPacked) return null;

//   if (isPacked) return <li>{name} ✔</li>;
//   return <li>{name} </li>;

// return <li>{isPacked ? <del>{name} ✔</del> : name}</li>;

// <li>
//   {name} {isPacked && "✔"}
// </li>
