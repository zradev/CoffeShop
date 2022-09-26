import React from "react";
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
            <img
              src={
                "https://ik.imagekit.io/jtpsjzhns/images/logo/logo_FKqSxeS_e1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664180778762"
              }
              alt="logo"
            />
          </div>
        </Link>

        <NavItems />
      </div>
    </>
  );
};

export default Navbar;
