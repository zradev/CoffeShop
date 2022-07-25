import React, { useState } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../../../data/Data";

const Menu = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <nav className="menu">
        <ul className={navList ? "small" : "flex"}>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path} onClick={() => setNavList(false)}>
                {list.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Menu;
