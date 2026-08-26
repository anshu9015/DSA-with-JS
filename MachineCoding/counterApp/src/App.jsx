import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    // setCount((prev) => prev + 1);
    setCount(count + 1);
    setCount(count + 1);

    // setCount((prev) => prev + 1);
    {
      console.log(count);
    }
  }
  {
    console.log(count, "count after render");
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h1>Counter App:{count}</h1>
      {/* {console.log(count)} */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
