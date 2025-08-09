import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [filtered, setFiltered] = useState("ALL");

  const storedValue = localStorage.getItem("setValue");
  let localStorageDataArray;
  try {
    localStorageDataArray = storedValue ? JSON.parse(storedValue) : [];
  } catch (err) {
    console.error("error in storing data", err);
    localStorageDataArray = [];
  }
  function handleClick() {
    if (!input || !status) {
      alert(`PLEASE MARK BOTH INPUT FIELD`);
      return;
    }
    const newTodo = {
      id: Date.now(),
      work: input,
      status: status,
    };
    const updatedArray = [...localStorageDataArray, newTodo];
    localStorage.setItem("setValue", JSON.stringify(updatedArray));
    setInput("");
    setStatus("");
  }
  function handleFilter(e) {
    setFiltered(e.target.value);
  }
  function filteredStatus() {
    if (filtered === "COMPLETED") {
      return localStorageDataArray.filter((el) => el.status === "COMPLETED");
    } else if (filtered === "PENDING") {
      return localStorageDataArray.filter((el) => el.status === "PENDING");
    } else {
      return localStorageDataArray;
    }
  }
  const filteredArray = filteredStatus();
  console.log("filteredArray---->>><<<<", filteredArray);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <label htmlFor="radio1">ALL</label>
      <input
        type="radio"
        id="radio1"
        name="status"
        value="ALL"
        onChange={handleFilter}
      />
      <label htmlFor="radio2">COMPLETED</label>
      <input
        type="radio"
        id="radio2"
        name="status"
        value="COMPLETED"
        onChange={handleFilter}
      />
      <label htmlFor="radio3">PENDING</label>
      <input
        type="radio"
        id="radio3"
        name="status"
        value="PENDING"
        onChange={handleFilter}
      />
      <br />
      <br />
      <div style={{ paddingRight: "10px", display: "inline" }}>
        <label htmlFor="input1">ENTER YOUR TODO: </label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div style={{ paddingRight: "5px", display: "inline" }}>
        <select
          id="select"
          name="select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option value="" disabled>
            ENTER YOUR STATUS
          </option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="PENDING">PENDING</option>
        </select>
      </div>
      <button type="submit" title="submit button" onClick={handleClick}>
        ADD TODO
      </button>
      <ul>
        {filteredArray.length
          ? filteredArray.map((todos) => (
              <li key={todos.id}>
                {todos.work} ---- {todos.status}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default App;
