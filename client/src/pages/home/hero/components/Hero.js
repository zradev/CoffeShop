import React from "react";
import "../Hero.css";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Carousel />
          <button>PRODUCTS</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
