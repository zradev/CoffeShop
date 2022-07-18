import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './../common/header/Header';
import Footer from './../common/footer/Footer';


const Pages = () => {
  return (
    <>
        <Router>
          <Header/>
            <Routes>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default Pages