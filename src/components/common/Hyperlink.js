import React from "react";

const Link = (props) => {
  return (
    <>
      <div className="link">
        <a href={props.link}>
          {React.createElement(props.icon)}
          <span>{props.text}</span>
        </a>
      </div>
    </>
  );
};

export default Link;
