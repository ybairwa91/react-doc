/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  let [stories, setStories] = useState([...initialStories]);
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>

      <StoryTray stories={stories} />
    </div>
  );
}

function StoryTray({ stories }) {
  //this is basically taking outside scope variable sideEffect and trying to update it
  //   stories.push({
  //     id: "create",
  //     label: "Create Story",
  //   });

  return (
    <ul>
      <li>
        {stories.map((story) => (
          <li key={story.id}>{story.label}</li>
        ))}
      </li>
      <li key={stories.id}>Create Story</li>
    </ul>
  );
}
