import React from "react";
import "../Categories.css";
import { categories } from "../../../../data/Data";
import Category from "./Category";
import Heading from "../../../../components/common/Heading";

const Categories = () => {
  return (
    <>
      <section className="catalog" id="categories">
        <div className="container">
          <Heading title="CATEGORIES" subtitle="Shop by product category" />
          <div className="content">
            {categories.map((category, index) => (
              <Category
                key={index}
                name={category.name}
                img={category.img}
                path={category.path}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
