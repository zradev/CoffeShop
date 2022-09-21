import React from "react";
import { Link } from "react-router-dom";

const Brand = (props) => {
  return (
    <>
      <div className="brand-home">
        <Link to={`/brands/${props.name}`}>
          <img src={props.img} alt="Brand" />
        </Link>
      </div>
    </>
  );
};

export default Brand;
