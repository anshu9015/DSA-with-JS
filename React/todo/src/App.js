import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [todo, setTodo] = useState([]);
  const[filtered,setFiltered] = useState([]);
  function handleClick() {
    if (!input.trim() || !status) {
      alert(`please add todo and status`);
      return;
    }
    const newTodo = {
      id: Date.now(),
      input: input,
      status: status,
    };
    console.log("newTod", newTodo)
    setTodo([...todo, newTodo]);
    setFiltered([...todo, newTodo])
    setStatus("");
    setInput("");
  }
  function handleFilter(){
    setFiltered(todo);
  }
  function handleFilter1() {
    setFiltered(todo.filter((el) => el.status === "COMPLETED"));
  }
  function handleFilter2() {
    setFiltered(todo.filter((el) => el.status === "PENDING"));
  }
  console.log("filter", filtered)
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="radio"
        id="checkbox1"
        name="todoActions"
        title="todo actions"
        onChange={handleFilter}
      />
      <label htmlFor="checkbox1">ALL</label>
      <input
        type="radio"
        id="checkbox2"
        name="todoActions"
        title="todo actions"
        onChange={handleFilter1}
      />
      <label htmlFor="checkbox2">COMPLETED</label>
      <input
        type="radio"
        id="checkbox3"
        name="todoActions"
        title="todo actions"
        onChange={handleFilter2}
      />
      <label htmlFor="checkbox3">PENDING</label>
      <label htmlFor="todo">Enter Your Todo</label>
      <input
        type="text"
        id="todo"
        name="todo"
        title="enter your todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <select
        id="select1"
        name="select1"
        title="select your task is pending or completed"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="" disabled>
          Enter your type of task
        </option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="PENDING">PENDING</option>
      </select>
      <button type="submit" title="submit button" onClick={handleClick}>
        ADD TODO
      </button>
      <ul>
      
        {filtered.length &&
          filtered.map((todos) => {
            return (
              <li key={todos.id}>
                {todos.input} ---- {todos.status}
              </li>
            );
          })}
      
      </ul>
    </div>
  );
}

export default App;
