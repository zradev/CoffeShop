import React from "react";

const Gallery = (props) => {
  return (
    <>
      <div className="gallery">
        <div className="zoom">
          <img
            src={props.images[props.activeImgIndex]}
            alt="active"
            onClick={() => props.onClick()}
          />
        </div>
        <div className="options">
          {props.images.map((image, index) => (
            <img
              src={image}
              alt=""
              onClick={() => props.setActiveImgIndex(() => index)}
              className={props.activeImgIndex === index ? "active" : ""}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
