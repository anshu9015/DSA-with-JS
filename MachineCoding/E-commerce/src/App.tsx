import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(): void {
    setCount(count + 1);
    console.log("11", count)
    setCount((prev) => prev + 1)
    console.log("12", count)

    // setCount(count + 1)
    console.log(count)
  }
  console.log(count, "outside the function")
  function decrement(): void {
    if (count < 0) { return; }
    setCount(count - 1)

  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter App:{count > 0 ? count : 0}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
