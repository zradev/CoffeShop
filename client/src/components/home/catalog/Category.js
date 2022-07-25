import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Category = (props) => {
  return (
    <>
      <div className="category">
        <img src={props.img} alt="category" />
        <div className="description">
          <h3>{props.name}</h3>
          <FaArrowCircleRight
            style={{ color: "#8B1705", marginLeft: "10px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
