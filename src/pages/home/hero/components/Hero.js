import React from "react";
import "../Hero.css";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Carousel />
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#categories";
            }}
          >
            PRODUCTS
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
