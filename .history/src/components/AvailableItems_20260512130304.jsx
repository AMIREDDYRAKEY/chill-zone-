import React, { useMemo, useState } from "react";

import americanNuts from "../assets/amerciannuts.jpg";
import blackChocolate from "../assets/blackchoclate.jpg";
import blackCurrent from "../assets/blackcureent.jpg";
import blueMojito from "../assets/Bluemogito.jpg";
import butterScotchShake from "../assets/Buttersckothshake.jpg";
import butterScotch from "../assets/butterscoth.jpg";
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

const itemsData = [
  // 🍦 ICE CREAMS
  {
    id: 1,
    name: "Vanilla Ice Cream",
    category: "Ice Cream",
    price: 55,
    rating: 4.8,
    image: vanillaIcecream,
  },
  {
    id: 2,
    name: "Strawberry Ice Cream",
    category: "Ice Cream",
    price: 55,
    rating: 4.7,
    image: strawberryIcecream,
  },
  {
    id: 3,
    name: "Pista Ice Cream",
    category: "Ice Cream",
    price: 65,
    rating: 4.8,
    image: kajuKismis,
  },
  {
    id: 4,
    name: "Butterscotch Ice Cream",
    category: "Ice Cream",
    price: 75,
    rating: 4.9,
    image: butterScotch,
  },
  {
    id: 5,
    name: "Chocolate Ice Cream",
    category: "Ice Cream",
    price: 75,
    rating: 4.9,
    image: chocolate,
  },
  {
    id: 6,
    name: "American Nuts Ice Cream",
    category: "Ice Cream",
    price: 95,
    rating: 4.8,
    image: americanNuts,
  },
  {
    id: 7,
    name: "Chocolate Walnut Ice Cream",
    category: "Ice Cream",
    price: 105,
    rating: 4.9,
    image: blackChocolate,
  },
  {
    id: 8,
    name: "Dry Fruit Special",
    category: "Ice Cream",
    price: 105,
    rating: 5.0,
    image: dryFruit,
  },
  {
    id: 9,
    name: "Kulfi Ice Cream",
    category: "Ice Cream",
    price: 105,
    rating: 4.7,
    image: kulfi,
  },
  {
    id: 10,
    name: "Tutty Fruity Ice Cream",
    category: "Ice Cream",
    price: 75,
    rating: 4.6,
    image: tuttyFruit,
  },

  // 🥤 MILK SHAKES
  {
    id: 11,
    name: "Vanilla Milk Shake",
    category: "Milk Shake",
    price: 89,
    rating: 4.7,
    image: vanillaMilkshake,
  },
  {
    id: 12,
    name: "Strawberry Milk Shake",
    category: "Milk Shake",
    price: 89,
    rating: 4.8,
    image: strawberryMilkshake,
  },
  {
    id: 13,
    name: "Chocolate Milk Shake",
    category: "Milk Shake",
    price: 109,
    rating: 4.9,
    image: chocolateMilkshake,
  },
  {
    id: 14,
    name: "Butter Scotch Shake",
    category: "Milk Shake",
    price: 109,
    rating: 4.7,
    image: butterScotchShake,
  },
  {
    id: 15,
    name: "Oreo Chocolate Shake",
    category: "Milk Shake",
    price: 129,
    rating: 5.0,
    image: oreoShake,
  },

  // 🍹 MOJITOS
  {
    id: 16,
    name: "Orange Mojito",
    category: "Mojito",
    price: 69,
    rating: 4.6,
    image: orangeMojito,
  },
  {
    id: 17,
    name: "Strawberry Mojito",
    category: "Mojito",
    price: 69,
    rating: 4.7,
    image: strawberryMojito,
  },
  {
    id: 18,
    name: "Watermelon Mojito",
    category: "Mojito",
    price: 69,
    rating: 4.8,
    image: watermelonMojito,
  },
  {
    id: 19,
    name: "Green Apple Mojito",
    category: "Mojito",
    price: 79,
    rating: 4.9,
    image: greenAppleMojito,
  },
  {
    id: 20,
    name: "Lime Mint Mojito",
    category: "Mojito",
    price: 79,
    rating: 4.8,
    image: limeMojito,
  },
  {
    id: 21,
    name: "Blue Curacao Mojito",
    category: "Mojito",
    price: 79,
    rating: 5.0,
    image: blueMojito,
  },
];

const AvailableItems = () => {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sortedItems = useMemo(() => {
    let filtered = [...itemsData];

    // CATEGORY FILTER
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    // SEARCH
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    // SORT
    switch (sortType) {
      case "low-high":
        return filtered.sort((a, b) => a.price - b.price);

      case "high-low":
        return filtered.sort((a, b) => b.price - a.price);

      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);

      case "name":
        return filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      default:
        return filtered;
    }
  }, [search, sortType, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-4 sm:px-6 lg:px-12 py-24">

      {/* HEADER */}
      <div className="mt-[-40px] mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Explore Our Menu 🍦
        </h1>

        <p className="text-gray-400 mt-1">
          Ice Creams, Mojitos & Milk Shakes
        </p>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-2">

        {[
          "All",
          "Ice Cream",
          "Milk Shake",
          "Mojito",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300
            ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white"
                : "bg-[#1a1d24] text-gray-300 border border-[#2b2f38]"
            }`}
          >
            {cat === "Ice Cream" && "🍦 "}
            {cat === "Milk Shake" && "🥤 "}
            {cat === "Mojito" && "🍹 "}
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH + SORT */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#1a1d24] border border-[#2b2f38]
          rounded-xl px-4 py-3 outline-none w-full md:w-[320px]
          text-sm focus:border-cyan-400 transition"
        />

        {/* SORT */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="bg-[#1a1d24] border border-[#2b2f38]
          rounded-xl px-4 py-3 outline-none text-sm
          focus:border-cyan-400 transition w-full md:w-[220px]"
        >
          <option value="default">Sort By</option>
          <option value="low-high">Price Low → High</option>
          <option value="high-low">Price High → Low</option>
          <option value="rating">Top Rated</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#171a21] border border-[#262b35]
            rounded-2xl overflow-hidden hover:-translate-y-1
            hover:border-cyan-400/40 transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[180px] object-cover hover:scale-105 transition duration-500"
              />

              {/* RATING */}
              <div
                className="absolute top-3 left-3 bg-white text-black
                px-2 py-1 rounded-lg text-xs font-semibold"
              >
                ⭐ {item.rating}
              </div>

              {/* OFFER */}
              <div
                className="absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-black/90 to-transparent p-3"
              >
                <p className="text-sm font-semibold">
                  20% OFF
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">

              <div className="flex justify-between items-start">

                <div>
                  <h2 className="text-lg font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 text-xs mt-1">
                    {item.category}
                  </p>
                </div>

                <span className="text-cyan-400 font-bold text-lg">
                  ₹{item.price}
                </span>
              </div>

              <p className="text-gray-500 text-[13px] mt-3 leading-5">
                Premium handcrafted flavor with fresh ingredients.
              </p>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-5">

                <div className="text-xs text-gray-400">
                  🚀 20 mins
                </div>

                <button
                  className="px-4 py-2 rounded-xl text-sm
                  bg-gradient-to-r from-cyan-400 to-purple-500
                  hover:opacity-90 transition font-medium"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {sortedItems.length === 0 && (
        <div className="text-center mt-20 text-gray-400">
          No items found 😢
        </div>
      )}
    </div>
  );
};

export default AvailableItems;