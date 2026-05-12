import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// images (keep yours same)
import americanNuts from "../assets/amerciannuts.jpg";
import blackChocolate from "../assets/blackchoclate.jpg";
import blueMojito from "../assets/Bluemogito.jpg";
import butterScotchShake from "../assets/Buttersckothshake.jpg";
import chocolate from "../assets/chocolate.jpg";
import chocolateMilkshake from "../assets/chocolatemilkshake.jpg";
import dryFruit from "../assets/dryfruit.jpg";
import greenAppleMojito from "../assets/greenapplemojito.jpg";
import kajuKismis from "../assets/kajukismis.jpg";
import kulfi from "../assets/kulfi.jpg";
import limeMojito from "../assets/limemojito.jpg";
import orangeMojito from "../assets/orangemojito.jpg";
import oreoShake from "../assets/oreoshake.jpg";
import strawberryMilkshake from "../assets/starberrymilksake.jpg";
import strawberryIcecream from "../assets/straberryicecream.jpg";
import strawberryMojito from "../assets/strwabeerymojito.jpg";
import tuttyFruit from "../assets/tuttyfruit.jpg";
import vanillaIcecream from "../assets/vanilaicecream.jpg";
import vanillaMilkshake from "../assets/vanilamilksake.jpg";
import watermelonMojito from "../assets/watermilonmojito.jpg";

// ITEMS DATA
const itemsData = [
  { id: 1, name: "Vanilla Ice Cream", category: "Ice Cream", price: 55, rating: 4.8, image: vanillaIcecream },
  { id: 2, name: "Strawberry Ice Cream", category: "Ice Cream", price: 55, rating: 4.7, image: strawberryIcecream },
  { id: 3, name: "Pista Ice Cream", category: "Ice Cream", price: 65, rating: 4.8, image: kajuKismis },
  { id: 4, name: "Butterscotch Ice Cream", category: "Ice Cream", price: 75, rating: 4.9, image: butterScotchShake },
  { id: 5, name: "Chocolate Ice Cream", category: "Ice Cream", price: 75, rating: 4.9, image: chocolate },
  { id: 6, name: "American Nuts Ice Cream", category: "Ice Cream", price: 95, rating: 4.8, image: americanNuts },

  { id: 11, name: "Vanilla Milk Shake", category: "Milk Shake", price: 89, rating: 4.7, image: vanillaMilkshake },
  { id: 12, name: "Strawberry Milk Shake", category: "Milk Shake", price: 89, rating: 4.8, image: strawberryMilkshake },
  { id: 13, name: "Chocolate Milk Shake", category: "Milk Shake", price: 109, rating: 4.9, image: chocolateMilkshake },

  { id: 16, name: "Orange Mojito", category: "Mojito", price: 69, rating: 4.6, image: orangeMojito },
  { id: 17, name: "Strawberry Mojito", category: "Mojito", price: 69, rating: 4.7, image: strawberryMojito },
  { id: 18, name: "Watermelon Mojito", category: "Mojito", price: 69, rating: 4.8, image: watermelonMojito },
];

const AvailableItems = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // ✅ FIXED ADD TO CART (safe state update)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((c) => c.id === item.id);

      if (exists) {
        return prevCart.map((c) =>
          c.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // CART COUNT
  const totalCartItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // FILTER + SORT
  const sortedItems = useMemo(() => {
    let data = [...itemsData];

    if (selectedCategory !== "All") {
      data = data.filter((i) => i.category === selectedCategory);
    }

    data = data.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortType === "low-high")
      return data.sort((a, b) => a.price - b.price);

    if (sortType === "high-low")
      return data.sort((a, b) => b.price - a.price);

    if (sortType === "rating")
      return data.sort((a, b) => b.rating - a.rating);

    if (sortType === "name")
      return data.sort((a, b) => a.name.localeCompare(b.name));

    return data;
  }, [search, sortType, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-6 py-24">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Explore Menu 🍦</h1>
          <p className="text-gray-400">Ice Creams • Shakes • Mojitos</p>
        </div>

        {/* CART BUTTON */}
        <div
          onClick={() =>
            navigate("/cart", { state: { cart } })
          }
          className="bg-blue-600 px-5 py-3 rounded-xl cursor-pointer"
        >
          🛒 Cart ({totalCartItems})
        </div>
      </div>

      {/* SEARCH + SORT */}
      <div className="flex gap-4 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="bg-[#1a1d24] px-4 py-2 rounded w-full"
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="bg-[#1a1d24] px-4 py-2 rounded"
        >
          <option value="default">Sort</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* ITEMS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
              <p className="text-gray-400">{item.category}</p>
              <p className="text-blue-400 font-bold">₹{item.price}</p>

              {added ? (
                <p className="text-green-400 mt-2">
                  Added ✔
                </p>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 bg-blue-600 px-4 py-2 rounded w-full"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {sortedItems.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No items found 😢
        </p>
      )}
    </div>
  );
};

export default AvailableItems;