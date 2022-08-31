import React from "react";
import Product from "./Product";
import { products } from "./../../../data/Products";

const SelectedProducts = (props) => {
  return products[props.category].map((item, index) => {
    if (props.selectedBrands.includes(item.brand)) {
      return (
        <Product
          img={item.img}
          imgAlt={item.imgAlt}
          name={item.name}
          price={item.price}
          id={index}
          key={index}
        />
      );
    }
    return null;
  });
};

export default SelectedProducts;
