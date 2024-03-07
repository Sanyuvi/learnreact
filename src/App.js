import logo from "./logo.svg";
import { Content } from "./components/content.js";
import "./App.css";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { useState } from "react";

function App() {
  //learning useState hooks & state management
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "practice coding",
    },
    {
      id: 2,
      checked: true,
      item: "problem solving",
    },
    {
      id: 3,
      checked: true,
      item: "css practice",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };
  return (
    <div>
      {/* learn Prop */}
      <Header title="To-Do List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
