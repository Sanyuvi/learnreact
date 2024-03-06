import React, { useState } from "react";

export const Content = () => {
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
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};
