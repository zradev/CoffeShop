import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Brands from "./pages/brands";
import Coffee from "./pages/coffee";
import Grinders from "./pages/grinders";
import Machines from "./pages/machines";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/grinders" element={<Grinders />} />
          <Route path="/machines" element={<Machines />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
