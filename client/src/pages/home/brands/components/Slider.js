import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const Slider = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={width > 700 ? 6 : 3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {props.brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <Brand img={brand.img} name={brand.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
