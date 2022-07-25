import React from "react";

const CarouselItem = (props) => {
  return (
    <>
      <div className="carousel-item">
        <img src={props.img} alt="slide" />
      </div>
    </>
  );
};

export default CarouselItem;
