import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <Link to={`${props.name}-${props.id}`}>
          <img
            src={props.img[0]}
            alt="product"
            onMouseOver={(e) => (e.currentTarget.src = props.img[1])}
            onMouseOut={(e) => (e.currentTarget.src = props.img[0])}
          />
          <p>{props.name}</p>
          <h4>{formatCurrency(props.price)}</h4>
        </Link>
      </div>
    </>
  );
};

export default Product;
