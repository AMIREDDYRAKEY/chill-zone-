import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Ourspecialites from "./components/Ourspecialites";
import Aboutus from "./components/Aboutus";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

// Home page (full landing)
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

// Individual pages
const MenuPage = () => <Ourspecialites />;
const AboutPage = () => <Aboutus />;
const GalleryPage = () => <Gallery />;
const ReviewsPage = () => <Feedback />;

const Order = () => <h1 className="text-white p-10">Order Page</h1>;
const Contact = () => <h1 className="text-white p-10">Contact Page</h1>;

const App = () => {
  return (
    <div style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}>
      
      <Navbar />

      <Routes>
        {/* main */}
        <Route path="/" element={<Home />} />

        {/* section routes */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* extra pages */}
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;