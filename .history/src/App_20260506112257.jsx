import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Ourspecialites from "./components/Ourspecialites";
import Aboutus from "./components/Aboutus";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

// Home page
const Home = () => (
  <>
    <Hero />
    <Marquee />
    <Ourspecialites />
    <Aboutus />
    <Gallery />
    <Feedback />
  </>
);

// Example extra page
const Order = () => <h1 className="text-white p-10">Order Page</h1>;
const Contact = () => <h1 className="text-white p-10">Contact Page</h1>;

const App = () => {
  return (
    <div style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;