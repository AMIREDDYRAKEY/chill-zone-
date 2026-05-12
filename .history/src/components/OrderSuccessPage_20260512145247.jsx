import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order || [];
  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-4 sm:px-10 py-10">

      {/* SUCCESS HEADER */}
      <div className="text-center mb-10">

        <div className="text-5xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold text-[#2563eb]">
          Order Placed Successfully
        </h1>

        <p className="text-gray-400 mt-2">
          Thank you for your order
        </p>
      </div>

      {/* ORDER BOX */}
      <div className="max-w-3xl mx-auto bg-[#171a21] border border-[#262b35] rounded-2xl p-5">

        <h2 className="text-xl font-bold mb-4">
          Order Summary
        </h2>

        <div className="space-y-4">

          {order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b border-[#2b2f38] pb-3"
            >

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-400 text-sm">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="text-[#2563eb] font-bold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

        </div>

        {/* TOTAL */}
        <div className="flex justify-between mt-6 text-lg font-bold">

          <span>Total</span>

          <span className="text-[#2563eb]">
            ₹{total}
          </span>
        </div>

      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">

        <button
          onClick={() => navigate("/avilableitems")}
          className="bg-[#2563eb] hover:bg-[#1d4ed8]
          px-6 py-3 rounded-xl font-medium"
        >
          Continue Shopping 🍦
        </button>

      </div>
    </div>
  );
};

export default OrderSuccessPage;