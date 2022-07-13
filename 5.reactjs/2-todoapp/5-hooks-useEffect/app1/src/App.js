import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [isCounter, setIsCounter] = useState(false);

  const onClick = () => {
    setIsCounter((isCounter) => !isCounter);
  };

  return (
    <>
      <button onClick={onClick}>{isCounter ? "On" : "Off"}</button>
      {isCounter && <Counter />}
    </>
  );
}
export default App;
