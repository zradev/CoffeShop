import React from "react";
import logo from "../../../../images/logo.jpg";
import { FaSearch } from "react-icons/fa";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu />
        <form>
          <input type="search" placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
