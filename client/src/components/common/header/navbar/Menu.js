import React from "react";
import { FaSearch } from "react-icons/fa";
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
          <li>
            <form>
              <input type="search" placeholder="Search" />
              <button>
                <FaSearch />
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
