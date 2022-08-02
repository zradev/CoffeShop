import React from "react";
import Hero from "./hero/components/Hero";
import Catalog from "./catalog/components/Catalog";
import Brands from "./brands/components/Brands";
import News from "./news/components/News";
import Content from "./content/components/Content";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Catalog />
        <Brands />
        <Content />
        <News />
      </div>
    </>
  );
};

export default Home;
