import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Aboutus from "./components/Aboutus";
import galler

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;