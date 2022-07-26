import React from "react";
import "./Content.css";
import { content } from "../../data/Data";
import Subcontent from "./Subcontent";

const Content = () => {
  return (
    <>
      <section className="content-section">
        <div className="container">
          {content.map((subcontent, index) => (
            <Subcontent
              img={subcontent.img}
              title={subcontent.title}
              subtitle={subcontent.subtitle}
              path={subcontent.path}
              text={subcontent.text}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Content;
