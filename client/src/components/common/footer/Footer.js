import React from "react";
import "./Footer.css";
import footerLogo from "../../../images/logo-footer.png";
import { categories, information } from "../../data/Data";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <img src={footerLogo} alt="" />
          </div>
          <div className="box">
            <ul>
              <h2>Information: </h2>
              {information.map((val, index) => (
                <li key={index}>{val.name}</li>
              ))}
            </ul>
          </div>
          <div className="box">
            <ul>
              <h2>Categories: </h2>

              {categories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
