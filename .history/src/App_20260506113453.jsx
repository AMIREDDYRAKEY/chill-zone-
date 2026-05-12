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
const App = () => {
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
 

export default App;