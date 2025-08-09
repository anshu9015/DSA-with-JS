import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  // const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const PENDING = "PENDING";
  function handleClick() {
    if (!input.trim() || !status) {
      alert(`Please enter both todo work and status`);
      return;
    }
    const newTodo = {
      id: Date.now(),
      work: input,
      status: status,
    };
    let updatedArray = [...localStorageDataArray, newTodo];
    // let updatedArray = [...sessionStorageDataArray, newTodo];
    localStorage.setItem("filteredArray", JSON.stringify([...updatedArray]));
    // sessionStorage.setItem("sessionArray", JSON.stringify([...updatedArray]));
    // setTodo([...todo, newTodo]);
    // setTodo((prev) => {
    //   let updatedArray = [...prev,newTodo]
    //   localStorage.setItem("filteredArray",JSON.stringify([...updatedArray]));
    //   return updatedArray;
    // })
    setInput("");
    setStatus("");
  }
  const localStorageDataArray = localStorage.getItem("filteredArray")
    ? JSON.parse(localStorage.getItem("filteredArray"))
    : [];
  // const sessionStorageDataArray = sessionStorage.getItem("sessionArray")
  //   ? JSON.parse(sessionStorage.getItem("sessionArray"))
  //   : [];
  // console.log(
  //   "localstorageData-------->mmmmmmmmm",
  //   sessionStorage.getItem("sessionArray")
  // );
  function handleFilter(e) {
    setFilter(e.target.value);
  }
  // console.log(">>>>>>>>>>", sessionStorageDataArray);
  function filteredStatus() {
    if (filter === "COMPLETED") {
      return localStorageDataArray.filter((el) => el.status === "COMPLETED");
    } else if (filter === "PENDING") {
      return localStorageDataArray.filter((el) => el.status === "PENDING");
    } else {
      return localStorageDataArray;
    }
  }
  // function filteredStatus() {
  //   if (filter === "COMPLETED") {
  //     return sessionStorageDataArray.filter((el) => el.status === "COMPLETED");
  //   } else if (filter === "PENDING") {
  //     return sessionStorageDataArray.filter((el) => el.status === "PENDING");
  //   } else {
  //     return sessionStorageDataArray;
  //   }
  // }
  console.log("filtered data---->", filter);
  const filteredArray = filteredStatus();
  console.log("filteredArray", filteredArray);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input
        type="radio"
        id="radio1"
        name="filter"
        title="radio button"
        value="ALL"
        onChange={handleFilter}
      />
      <label htmlFor="radio1">ALL</label>
      <input
        type="radio"
        id="radio2"
        name="filter"
        title="radio button"
        value="COMPLETED"
        onChange={handleFilter}
      />
      <label htmlFor="radio2">COMPLETED</label>
      <input
        type="radio"
        id="radio3"
        name="filter"
        title="radio button"
        value={PENDING}
        onChange={handleFilter}
      />
      <label htmlFor="radio3">PENDING</label>
      <br />
      <br />
      <label htmlFor="todo">Enter your TODO: </label>
      <input
        type="text"
        id="todo"
        name="todo"
        title="Enter your todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        title="select your status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}>
        <option value="" disabled>
          Enter your status:
        </option>
        <option value="COMPLETED">COMPLETED </option>
        <option value="PENDING">PENDING </option>
      </select>
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
