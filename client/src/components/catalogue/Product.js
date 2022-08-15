import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <Link to={`product/${props.name}-${props.id}`}>
          <img src={props.imgAlt} alt="" />
          <p>{props.name}</p>
        </Link>
        <h3>${props.price}</h3>
      </div>
    </>
  );
};

export default Product;
