/* eslint-disable react/prop-types */
import { useState, Fragment } from "react";

const initialPosition = {
  x: 0,
  y: 0,
};

function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    // shape.position.x += dx;
    // shape.position.y += dy;

    setShape({
      ...shape,
      position: {
        ...shape.position,
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <Fragment>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </Fragment>
  );
}

function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp() {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >
      {children}
    </div>
  );
}

function Background({ position }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
        width: 250,
        height: 250,
        backgroundColor: "rgba(200, 200, 0, 0.2)",
      }}
    />
  );
}

export default function App() {
  return <Canvas />;
}
