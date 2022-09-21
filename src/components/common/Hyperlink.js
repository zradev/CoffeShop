import React from "react";

const Link = (props) => {
  return (
    <>
      <div className="link">
        {/* TODO: Find a better way to dynamically set an icon */}
        <a href={props.link}>
          {React.createElement(props.icon)}
          <span>{props.text}</span>
        </a>
      </div>
    </>
  );
};

export default Link;
