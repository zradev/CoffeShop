import React from "react";
import useScrollToTop from "./hooks/useScrollToTop";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Brands from "./pages/brands";
import Coffee from "./pages/coffee";
import Grinders from "./pages/grinders";
import Machines from "./pages/machines";
import Accessories from "./pages/accessories";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/information/about/components/AboutUs";
import Contacts from "./pages/information/contacts/components/Contacts";
import FAQ from "./pages/information/faq/components/FAQ";
import Shipment from "./pages/information/shipment/components/Shipment";
import Terms from "./pages/information/terms/components/Terms";
import Warranty from "./pages/information/warranty/components/Warranty";

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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/warranty" element={<Warranty />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
