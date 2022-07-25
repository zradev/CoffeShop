import React from "react";
import Catalog from "./catalog/Catalog";
import Hero from "./hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
    </>
  );
};

export default Home;
