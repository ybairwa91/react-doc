/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

//create a custom hook
function useTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(function () {
    
    const id = setInterval(function () {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
function Clock({ time }) {
  return <h1>{time.toLocaleTimeString()}</h1>;
}

export default function App() {
  const time = useTime();
  return <Clock time={time} />;
}
