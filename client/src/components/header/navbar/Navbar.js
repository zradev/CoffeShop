import React from "react";
import logo from "../../../assets/images/logo/logo.jpg";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Navbar;
