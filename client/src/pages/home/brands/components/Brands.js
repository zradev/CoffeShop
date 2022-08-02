import React from "react";
import "../Brands.css";
import { brands } from "../../../../data/Data";
import Slider from "./Slider";
import Heading from "./../../../../components/common/Heading";

const Brands = () => {
  return (
    <>
      <section className="brands-home">
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
