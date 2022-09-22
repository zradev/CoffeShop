import React from "react";
import logo from "../../../assets/images/logo/logo.jpg";
import NavItems from "./NavItems";
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

        <NavItems />
      </div>
    </>
  );
};

export default Navbar;
