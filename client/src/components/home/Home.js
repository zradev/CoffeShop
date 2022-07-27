import React from "react";
import Brands from "./brands/Brands";
import Catalog from "./catalog/Catalog";
import Content from "./content/Content";
import Hero from "./hero/Hero";
import News from "./news/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Brands />
      <Content />
      <News />
    </>
  );
};

export default Home;
