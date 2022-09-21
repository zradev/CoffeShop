import React, { useEffect, useState } from "react";
import "../News.css";
import Article from "./Article";
import { news } from "../../../../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Heading from "./../../../../components/common/Heading";

const News = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <section className="news">
        <div className="container">
          <Heading
            title="LATEST NEWS"
            subtitle="News from the world of Espresso Coffee Shop"
          />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={width > 950 ? 3 : 1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {news.map((article, index) => (
              <SwiperSlide key={index}>
                <Article
                  img={article.img}
                  title={article.title}
                  datePosted={article.datePosted}
                  author={article.author}
                  path={article.path}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default News;
