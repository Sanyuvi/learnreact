import React from "react";
// passing length data as prop
export const Footer = ({ length }) => {
  return (
    <footer>
      {length} List {length === 1 ? "Item" : "Items"}
    </footer>
  );
};
