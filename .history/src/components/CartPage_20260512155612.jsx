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
    <div className="min-h-screen bg-[#0f1115] text-white">

      {/* CENTER WRAPPER (IMPORTANT FIX FOR LAPTOP) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-10 py-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="text-2xl sm:text-3xl font-bold">
            Your Cart 🛒
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="bg-[#2563eb] hover:bg-[#1d4ed8]
            px-5 py-2 rounded-xl transition font-medium"
          >
            Back
          </button>
        </div>

        {/* EMPTY STATE */}
        {cart.length === 0 ? (

          <div className="text-center mt-24">

            <h2 className="text-2xl font-semibold mb-3">
              Your cart is empty
            </h2>

            <p className="text-gray-400 mb-6">
              Add delicious items and come back 🍦
            </p>

            <button
              onClick={() => navigate("/avilableitems")}
              className="bg-[#2563eb] hover:bg-[#1d4ed8]
              px-6 py-3 rounded-xl transition font-medium"
            >
              Browse Menu
            </button>
          </div>

        ) : (

          <>
            {/* CART ITEMS */}
            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-[#171a21] border border-[#262b35]
                  rounded-2xl p-4 flex gap-4
                  hover:border-[#2563eb]/40 transition"
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 sm:w-28 sm:h-28
                    rounded-xl object-cover"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">

                    <div className="flex justify-between">

                      <div>
                        <h2 className="text-lg font-semibold">
                          {item.name}
                        </h2>

                        <p className="text-gray-400 text-sm">
                          {item.category}
                        </p>
                      </div>

                      <span className="text-[#2563eb] font-bold">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* QTY + SUBTOTAL */}
                    <div className="flex items-center justify-between mt-6">

                      <div className="bg-[#0f1115] border border-[#2b2f38]
                      px-4 py-1 rounded-lg text-sm">
                        Qty : {item.quantity}
                      </div>

                      <div className="text-right">
                        <p className="text-gray-400 text-xs">
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

            {/* TOTAL CARD */}
            <div className="mt-10 bg-[#171a21] border border-[#262b35]
            rounded-2xl p-5 sm:p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  Total Amount
                </h2>

                <span className="text-3xl font-bold text-[#2563eb]">
                  ₹{totalPrice}
                </span>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">

                <button
                  onClick={() => navigate("/availableitems")}
                  className="flex-1 py-3 rounded-xl
                  border border-[#2563eb]
                  text-[#2563eb]
                  hover:bg-[#2563eb]
                  hover:text-white transition font-medium"
                >
                  Add More Items
                </button>

               <button
  onClick={() =>
    navigate("/order-success", { state: { order: cart } })
  }
  className="flex-1 py-3 rounded-xl
  bg-[#2563eb] hover:bg-[#1d4ed8]
  transition font-semibold"
>
  Place Order 🚀
</button>

              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;