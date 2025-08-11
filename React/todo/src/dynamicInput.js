import { useState } from "react";

const DynamicInput = () => {
  const [list, setList] = useState([{ id: Date.now() }]);
  function handleClick() {
    const newList = {
      id: Date.now(),
    };
    setList([...list, newList]);
  }
  function handleRemove(item){
    setList(list.filter((el) => el.id !== item.id))    
  }
  return (
    <>
      <h1>DYNAMIC INPUT BOX</h1>
      {list.map((item) => (
        <>
        <input type="text" id="input1" title="input box" value={item.id} />
        <button onClick={() => handleRemove(item)}>-</button>
        </>
      ))}
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default DynamicInput;
