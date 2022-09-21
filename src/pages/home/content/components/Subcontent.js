import React from "react";
import { Link } from "react-router-dom";

const Subcontent = (props) => {
  return (
    <>
      <div className="subcontent" ke={props.index}>
        <img src={props.img} alt="subcontent" />
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <Link to={props.path}>{props.text}</Link>
      </div>
    </>
  );
};

export default Subcontent;
