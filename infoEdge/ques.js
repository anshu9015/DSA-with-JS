import { useRef, useState } from "react";
import "./App.css";

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= dealy) {
      lastCall = now;
      fn(...args);
    }
  };
}
function App() {
  const [count, setCount] = useState(0);
  // const [pending, setPending] = useState(false);
  // useEffect(() => {
  //   let timer;
  //   if (pending) {
  //     timer = setTimeout(() => {
  //       setCount((prev) => prev + 1);
  //       setPending(false);
  //     }, 5000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [pending]);

  const handleClick = useRef(
    throttle(() => {
      setCount((prev) => prev + 1);
    }, 5000)
  ).current;

  return (
    <div className="App">
      <h1>COUNT INCREMENT</h1>
      <p>Count:{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
