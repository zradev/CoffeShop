import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <Link to={`product/${props.name}-${props.id}`}>
          <img
            src={props.img}
            alt={props.name}
            onMouseOver={(e) => (e.currentTarget.src = props.imgAlt)}
            onMouseOut={(e) => (e.currentTarget.src = props.img)}
          />
          <p>{props.name}</p>
          <h3>${props.price}</h3>
        </Link>
      </div>
    </>
  );
};

export default Product;
