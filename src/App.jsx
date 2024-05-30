import React, { useState } from "react";
import List from "./components/List";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addItem = () => {
    setItems((prevItems) => [...prevItems, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Item List</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={addItem}>Add Item</button>
      <List items={items} />
    </div>
  );
};

export default App;
