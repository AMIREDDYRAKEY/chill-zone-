import React from "react";

const CartPage = ({ cart }) => {

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-4 sm:px-6 lg:px-12 py-24">

      {/* TOP */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Your Cart 🛒
        </h1>

        <p className="text-gray-400 mt-2">
          Review your selected items
        </p>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="text-center mt-32">
          <h2 className="text-2xl font-semibold">
            Cart is Empty 😢
          </h2>

          <p className="text-gray-400 mt-3">
            Add some delicious items
          </p>
        </div>
      ) : (
        <>
          {/* ITEMS */}
          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#171a21] border border-[#262b35]
                rounded-2xl p-4 flex gap-4 items-center"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                {/* CONTENT */}
                <div className="flex-1">

                  <h2 className="text-lg font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.category}
                  </p>

                  <div className="flex items-center justify-between mt-4">

                    <p className="text-[#2563eb] font-bold text-lg">
                      ₹{item.price}
                    </p>

                    <div
                      className="bg-[#1f2937]
                      px-3 py-1 rounded-lg text-sm"
                    >
                      Qty: {item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BILL */}
          <div
            className="mt-10 bg-[#171a21]
            border border-[#262b35]
            rounded-2xl p-6"
          >

            <div className="flex justify-between mb-4">
              <span className="text-gray-400">
                Total Items
              </span>

              <span className="font-semibold">
                {cart.length}
              </span>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-gray-400">
                Total Amount
              </span>

              <span className="text-2xl font-bold text-[#2563eb]">
                ₹{totalPrice}
              </span>
            </div>

            {/* BUTTON */}
            <button
              className="w-full py-4 rounded-xl
              bg-[#2563eb]
              hover:bg-[#1d4ed8]
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