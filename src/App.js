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
import Contacts from "./pages/information/contacts";
import FAQ from "./pages/information/faq";
import Shipment from "./pages/information/shipment";
import Terms from "./pages/information/terms";
import Warranty from "./pages/information/warranty";
import ProductPage from "./components/catalogue/products/page/Page";
import Redirect from "./pages/redirect";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  useScrollToTop();
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/coffee/:id" element={<ProductPage />} />
          <Route path="/grinders" element={<Grinders />} />
          <Route path="/grinders/:id" element={<ProductPage />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/machines/:id" element={<ProductPage />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:id" element={<ProductPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
