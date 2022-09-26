import React from "react";
import "./Footer.css";
import { categories, information } from "../../data/Data";
import Box from "./Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <img
              src={
                "https://ik.imagekit.io/jtpsjzhns/images/logo/logo-footer_sC7XiCI8KB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664180778849"
              }
              alt=""
            />
          </div>
          <Box heading={"Information:"} arr={information} />
          <Box heading={"Categories:"} arr={categories} />

          <div className="box">
            <div className="sublogo">
              <img
                src={
                  "https://ik.imagekit.io/jtpsjzhns/images/logo/logo-footer-esteso_pVhzy4MY7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664180779008"
                }
                alt=""
              />
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
