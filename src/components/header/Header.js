import React from "react";
import Banner from "./banner/Banner";
import "./Header.css";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header>
      <Banner />
      <Navbar />
    </header>
  );
};

export default Header;
