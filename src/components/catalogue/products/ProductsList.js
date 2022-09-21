import React from "react";
import Product from "./Product";

const ProductsList = (props) => {
  return (
    <>
      {props.items.map((product, index) => (
        <Product
          img={product.img}
          imgAlt={product.imgAlt}
          name={product.name}
          price={product.price}
          id={index}
          key={index}
        />
      ))}
    </>
  );
};

export default ProductsList;
