import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/logo/logo-footer.png";
import footerLogoEsteso from "../../assets/images/logo/logo-footer-esteso.png";

import { categories, information } from "../../data/Data";
import Box from "./Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <img src={footerLogo} alt="" />
          </div>
          <Box heading={"Information:"} arr={information} />
          <Box heading={"Categories:"} arr={categories} />

          <div className="box">
            <div className="sublogo">
              <img src={footerLogoEsteso} alt="" />
            </div>
            <div className="text">
              Stay informed about the world of coffee and Espresso Coffee Shop!
            </div>
            <div className="text">
              <span>Blog:</span>
              News and heart from the world some coffee:{" "}
              <Link to="/blog">go to the blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
