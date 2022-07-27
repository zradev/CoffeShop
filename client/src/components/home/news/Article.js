import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  return (
    <>
      <div className="article">
        <Link to={props.path}>
          <img src={props.img} alt="article" />
          <div className="content">
            <h3>{props.title}</h3>
            <h4>{props.datePosted}</h4>
            <p>{props.author}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Article;
