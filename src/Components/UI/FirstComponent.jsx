/*
Component render markup(html basically)

React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work

Components can render other components, but you must never nest their definitions:

never define a component inside another one never

define every component at the top level
*/

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

//nest into another component

export default function Gallary() {
  return (
    <section>
      <h1>Amazing scientist</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//what browser sees
//bcs component return markup only
// <section>
//   <h1>Amazing scientists</h1>
//   <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
//   <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
//   <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
// </section>