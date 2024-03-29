import React from "react";
import ItemList from "./itemList";

export const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
};
