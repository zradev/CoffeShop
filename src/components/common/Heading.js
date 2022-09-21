import React from "react";

const Heading = (props) => {
  return (
    <>
      <div className="heading">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
