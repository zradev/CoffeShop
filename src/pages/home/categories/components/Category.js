import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <>
      <div className="category">
        <Link to={props.path}>
          <img src={props.img} alt="category" />
          <div className="description">
            <h3>{props.name}</h3>
            <FaArrowCircleRight
              style={{ color: "#8B1705", marginLeft: "10px" }}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
