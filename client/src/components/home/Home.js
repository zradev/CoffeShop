import React from "react";
import Brands from "./brands/Brands";
import Catalog from "./catalog/Catalog";
import Content from "./content/Content";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Brands />
      <Content />
    </>
  );
};

export default Home;
