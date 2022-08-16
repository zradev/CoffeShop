import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../../../data/Data";
import ClickAwayListener from "@mui/material/ClickAwayListener";
const Menu = () => {
  const [navList, setNavList] = useState(false);

  const handleClickAway = () => {
    setNavList(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="menu">
        <ul className={navList ? "small" : "small flex"}>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path} onClick={() => setNavList(false)}>
                {list.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className={navList ? "toggle open" : "toggle "}>
          <button onClick={() => setNavList(!navList)} aria-label="menu">
            {navList ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Menu;
