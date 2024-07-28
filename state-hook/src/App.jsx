import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div style={{ backgroundColor: color }} className="container">
      <div className="inner">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("white")}>White</button>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("pink")}>Pink</button>
        <button onClick={() => setColor("orange")}>Orange</button>
        <button onClick={() => setColor("purple")}>Purple</button>
      </div>
    </div>
  );
}

export default App;
