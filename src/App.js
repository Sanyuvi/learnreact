import { Content } from "./components/content.js";
import "./App.css";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { useState } from "react";
import AddItem from "./components/AddItem.js";
import SearchItem from "./components/SearchItem.js";

function App() {
  //learning useState hooks & state management
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo-list"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newAddItem = { id, checked: false, item };
    const listItems = [...items, newAddItem];
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addNewItems
    addItems(newItem);
    setNewItem("");
  };
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
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
