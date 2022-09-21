import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <Link to={`product/${props.id}`}>
          <img
            src={props.img}
            alt={props.name}
            onMouseOver={(e) => (e.currentTarget.src = props.imgAlt)}
            onMouseOut={(e) => (e.currentTarget.src = props.img)}
          />
          <p>{props.name}</p>
          <h4>${props.price}</h4>
        </Link>
      </div>
    </>
  );
};

export default Product;
