import React from "react";
import "./Catalog.css";
import { categories } from "../../data/Data";
import Category from "./Category";
import Heading from "../../common/Heading";

const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <Heading title="CATALOG" subtitle="Shop by product category" />
        <div className="content">
          {categories.map((category, index) => (
            <Category key={index} name={category.name} img={category.img} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Catalog;
