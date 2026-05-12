// CartPage.jsx

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CartPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-4 sm:p-6">

      {/* TOP */}
      <div className="flex items-center justify-between mb-8">

        <h1 className="text-2xl sm:text-3xl font-bold">
          Your Cart 🛒
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="bg-[#2563eb] hover:bg-[#1d4ed8]
          px-4 sm:px-5 py-2 rounded-xl transition"
        >
          Back
        </button>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (

        <div className="text-center mt-20">

          <h2 className="text-2xl font-semibold mb-3">
            Cart is Empty 😢
          </h2>

          <p className="text-gray-400 mb-6">
            Add some delicious items first
          </p>

          <button
            onClick={() => navigate("/avilableitems")}
            className="bg-[#2563eb] hover:bg-[#1d4ed8]
            px-6 py-3 rounded-xl transition"
          >
            Browse Menu 🍦
          </button>
        </div>

      ) : (

        <>
          {/* CART ITEMS */}
          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-[#171a21]
                border border-[#262b35]
                rounded-2xl p-4
                flex flex-col sm:flex-row
                gap-4"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-40 sm:h-28 rounded-xl object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <div className="flex justify-between items-start gap-3">

                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold">
                        {item.name}
                      </h2>

                      <p className="text-gray-400 text-sm mt-1">
                        {item.category}
                      </p>
                    </div>

                    <span className="text-[#2563eb] font-bold text-lg">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* QUANTITY + SUBTOTAL */}
                  <div className="mt-5 flex items-center justify-between">

                    <div
                      className="bg-[#0f1115]
                      border border-[#2b2f38]
                      px-4 py-2 rounded-xl text-sm"
                    >
                      Qty : {item.quantity}
                    </div>

                    <div className="text-right">

                      <p className="text-gray-400 text-sm">
                        Sub Total
                      </p>

                      <p className="font-bold text-lg">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL SECTION */}
          <div
            className="mt-10 bg-[#171a21]
            border border-[#262b35]
            rounded-2xl p-5 sm:p-6"
          >

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-xl sm:text-2xl font-bold">
                Total Amount
              </h2>

              <span className="text-2xl sm:text-3xl font-bold text-[#2563eb]">
                ₹{totalPrice}
              </span>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() => navigate("/avilableitems")}
                className="flex-1 py-4 rounded-xl
                border border-[#2563eb]
                text-[#2563eb]
                hover:bg-[#2563eb]
                hover:text-white
                transition font-semibold"
              >
                Add More Items
              </button>

              <button
                className="flex-1 py-4 rounded-xl
                bg-[#2563eb] hover:bg-[#1d4ed8]
                transition font-semibold text-lg"
              >
                Place Order 🚀
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;