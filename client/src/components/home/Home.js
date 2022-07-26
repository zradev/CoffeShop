import React from "react";
import Brands from "./brands/Brands";
import Catalog from "./catalog/Catalog";
import Hero from "./hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Brands />
    </>
  );
};

export default Home;
