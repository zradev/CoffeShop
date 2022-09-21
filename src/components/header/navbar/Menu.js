import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../../../data/Data";
import ClickAwayListener from "@mui/material/ClickAwayListener";
const Menu = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleClickAway = () => {
    setIsNavVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="menu">
        <ul className={isNavVisible ? "small" : "small flex"}>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path} onClick={() => setIsNavVisible(false)}>
                {list.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="toggle">
          <button
            onClick={() => setIsNavVisible(!isNavVisible)}
            aria-label="menu"
          >
            {isNavVisible ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Menu;
