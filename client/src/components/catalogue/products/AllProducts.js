import React from "react";
import { products } from "./../../../data/Products";
import Product from "./Product";

const AllProducts = (props) => {
  return products[props.category].map((item, index) => (
    <Product
      img={item.img}
      imgAlt={item.imgAlt}
      name={item.name}
      price={item.price}
      id={index}
      key={index}
    />
  ));
};

export default AllProducts;
