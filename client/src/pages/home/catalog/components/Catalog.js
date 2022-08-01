import React from "react";
import "../Catalog.css";
import { categories } from "../../../../data/Data";
import Category from "./Category";
import Heading from "./../../../../components/common/Heading";

const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <div className="container">
          <Heading title="CATALOG" subtitle="Shop by product category" />
          <div className="content">
            {categories.map((category, index) => (
              <Category key={index} name={category.name} img={category.img} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
