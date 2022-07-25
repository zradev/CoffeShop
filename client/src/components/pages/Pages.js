import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./../common/header/Header";
import Footer from "./../common/footer/Footer";
import Home from "../home/Home";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
