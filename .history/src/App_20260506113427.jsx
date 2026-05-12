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
import useSectionTracking from "./components/Hooks/useSectionTracking";

// Home (scroll page)
const Home = () => {
  useSectionTracking(["home", "menu", "about", "gallery", "reviews"]);

  return (
    <>
      <div id="home"><Hero /></div>
      <div id="menu"><Ourspecialites /></div>
      <div id="about"><Aboutus /></div>
      <div id="gallery"><Gallery /></div>
      <div id="reviews"><Feedback /></div>
    </>
  );
};

// Other pages
const Order = () => <h1 className="text-white p-10">Order Page</h1>;
const Contact = () => <h1 className="text-white p-10">Contact Page</h1>;

const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#09071a] to-[#120920]">

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