import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// ❗ keep all your imports as they are...

const AvailableItems = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);

    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const totalCartItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const sortedItems = useMemo(() => {
    let filtered = [...itemsData];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (i) => i.category === selectedCategory
      );
    }

    filtered = filtered.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortType === "low-high")
      return filtered.sort((a, b) => a.price - b.price);

    if (sortType === "high-low")
      return filtered.sort((a, b) => b.price - a.price);

    if (sortType === "rating")
      return filtered.sort((a, b) => b.rating - a.rating);

    if (sortType === "name")
      return filtered.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    return filtered;
  }, [search, sortType, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6">

      {/* CART BUTTON */}
      <div
        onClick={() =>
          navigate("/cart", { state: { cart } })
        }
        className="fixed bottom-5 right-5 bg-blue-600 px-5 py-4 rounded-full cursor-pointer"
      >
        🛒 {totalCartItems}
      </div>

      {/* ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {sortedItems.map((item) => {
          const added = cart.find((c) => c.id === item.id);

          return (
            <div
              key={item.id}
              className="bg-[#171a21] p-4 rounded-xl"
            >
              <img
                src={item.image}
                className="h-40 w-full object-cover rounded-lg"
              />

              <h2 className="mt-2 font-bold">{item.name}</h2>
              <p>₹{item.price}</p>

              {added ? (
                <p className="text-green-400 mt-2">
                  Added ✔
                </p>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 bg-blue-600 px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableItems;