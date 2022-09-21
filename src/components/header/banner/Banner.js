import React from "react";
import Hyperlink from "../../common/Hyperlink";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Hyperlink
          icon={FaPhoneAlt}
          link="tel:+3596669995"
          text="+3596669995"
        />
        <Hyperlink
          icon={FaEnvelope}
          link="mailto: email@email.com"
          text="email@email.com"
        />
        <Hyperlink icon={FaFacebookSquare} link="https://www.facebook.com" />
        <Hyperlink icon={FaTwitterSquare} link="https://www.twitter.com" />
        <Hyperlink icon={FaInstagramSquare} link="https://www.instagram.com" />
      </div>
    </>
  );
};

export default Banner;
