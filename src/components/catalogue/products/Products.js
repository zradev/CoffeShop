import React from "react";
import Product from "./Product";
import "./Products.css";
import NoResults from "./NoResults";

const Products = (props) => {
  return (
    <>
      {props.products.length !== 0 ? (
        props.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.images}
          />
        ))
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default Products;
