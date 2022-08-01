import React from "react";
import { Link } from "react-router-dom";

const Box = (props) => {
  return (
    <>
      <div className="box">
        <ul>
          <h2>{props.heading}</h2>
          {props.arr.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Box;
