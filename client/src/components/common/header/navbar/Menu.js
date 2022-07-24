import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../../data/Data";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path}>{list.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
