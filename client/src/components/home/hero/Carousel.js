import React, { useEffect, useState } from "react";
import "./Hero.css";
import { slides } from "../../data/Data";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <CarouselItem img={slide.img} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
