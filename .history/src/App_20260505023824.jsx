import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Aboutus from "./components/Aboutus";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;