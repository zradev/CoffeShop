import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Brands from "./pages/brands";
import Coffee from "./pages/coffee";
import Grinders from "./pages/grinders";
import Machines from "./pages/machines";
import Accessories from "./pages/accessories";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/grinders" element={<Grinders />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
