import React from "react";
import logo from "../../../assets/images/logo/logo.jpg";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import { useScrollLock } from "./../../../hooks/useScrollLock";

const Navbar = () => {
  const { unlockScroll } = useScrollLock();

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo" onClick={unlockScroll()}>
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
