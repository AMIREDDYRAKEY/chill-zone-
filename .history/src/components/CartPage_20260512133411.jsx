import React from "react";

const CartPage = ({ cart = [] }) => {

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6">

      <h1 className="text-3xl font-bold mb-8">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-gray-400 text-lg">
          Cart is Empty 😢
        </div>
      ) : (
        <>
          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#171a21] border border-[#262b35]
                rounded-2xl p-4 flex items-center gap-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="text-lg font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {item.category}
                  </p>

                  <p className="text-[#2563eb] font-bold mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <div className="text-right">

                  <p className="text-sm text-gray-400">
                    Qty: {item.quantity}
                  </p>

                  <p className="font-bold mt-2">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div
            className="mt-10 bg-[#171a21]
            border border-[#262b35]
            rounded-2xl p-6"
          >

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-xl font-bold">
                Total Amount
              </h2>

              <span className="text-2xl font-bold text-[#2563eb]">
                ₹{totalPrice}
              </span>
            </div>

            <button
              className="w-full py-4 rounded-xl
              bg-[#2563eb] hover:bg-[#1d4ed8]
              transition font-semibold text-lg"
            >
              Place Order 🚀
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;