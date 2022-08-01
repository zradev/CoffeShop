import React from "react";
import Banner from "./banner/Banner";
import "./Header.css";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Banner />
      <Navbar />
    </div>
  );
};

export default Header;
