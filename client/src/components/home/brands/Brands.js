import React from "react";
import "./Brands.css";
import Heading from "./../../common/Heading";
import { brands } from "../../data/Data";
import Slider from "./Slider";

const Brands = () => {
  return (
    <>
      <section className="brands">
        <div className="container">
          <Heading title="OUR BRANDS" subtitle=" Carefully selected for you" />
          <div className="content">
            <Slider brands={brands} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
