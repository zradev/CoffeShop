import React from "react";
import logo from "../../../assets/images/logo/logo.jpg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <Menu />
      </div>
    </>
  );
};

export default Navbar;
