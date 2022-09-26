import React from "react";
import Hero from "./hero/components/Hero";

import Categories from "./categories/components/Categories";
import Brands from "./brands/components/Brands";
import Content from "./content/components/Content";
import News from "./news/components/News";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Categories />
        <Brands />
        <Content />
        <News />
      </div>
    </>
  );
};

export default Home;
