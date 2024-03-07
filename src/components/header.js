import React from "react";
// passing title data as prop
export const Header = ({ title }) => {
  return <header>{title}</header>;
};

//If some instance we cant get the datas as props or from Api, then we have to make some default title as visible
Header.defaultProps = {
  title: "To-Do List",
};
