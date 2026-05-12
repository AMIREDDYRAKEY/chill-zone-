import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AvailableItems from "./components/AvailableItems";
import CartPage from "./components/CartPage";
import OrderSuccessPage from "./components/OrderSuccessPage";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ✅ FIXED PATH NAME */}
      <Route
        path="/availableitems"
        element={<AvailableItems cart={cart} setCart={setCart} />}
      />

      <Route
        path="/cart"
        element={<CartPage cart={cart} setCart={setCart} />}
      />

      <Route
        path="/order-success"
        element={<OrderSuccessPage cart={cart} setCart={setCart} />}
      />
    </Routes>
  );
};

export default App;