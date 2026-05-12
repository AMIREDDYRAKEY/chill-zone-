import React, { useMemo, useState } from "react";

const itemsData = [
  {
    id: 1,
    name: "Chocolate Blast",
    type: "Ice Cream",
    category: "Chocolate",
    price: 149,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Vanilla Dream",
    type: "Ice Cream",
    category: "Classic",
    price: 99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Blueberry Chill",
    type: "Ice Cream",
    category: "Fruit",
    price: 199,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Mint Mojito",
    type: "Mojito",
    category: "Mint",
    price: 119,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Lemon Mojito",
    type: "Mojito",
    category: "Lemon",
    price: 109,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    name: "Oreo Shake",
    type: "Milk Shake",
    category: "Chocolate",
    price: 179,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    name: "Strawberry Shake",
    type: "Milk Shake",
    category: "Fruit",
    price: 169,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1553787499-6f913324e66f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    name: "Caramel Shake",
    type: "Milk Shake",
    category: "Caramel",
    price: 189,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
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
        (item) => item.type === selectedCategory
      );
    }

    // SEARCH FILTER
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    // SORTING
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

      {/* TOP */}
      <div className="mt-[-40px] mb-10">

        <h1 className="text-2xl sm:text-3xl font-bold">
          Explore Our Menu 🍦
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Ice Creams, Mojitos & Milk Shakes
        </p>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-3">

        {[
          "All",
          "Ice Cream",
          "Mojito",
          "Milk Shake",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm transition
            ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white"
                : "bg-[#1a1d24] text-gray-300 border border-[#2b2f38]"
            }`}
          >
            {cat === "Ice Cream" && "🍦 "}
            {cat === "Mojito" && "🍹 "}
            {cat === "Milk Shake" && "🥤 "}
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH + SORT */}
      <div className="flex flex-col md:flex-row gap-3 justify-between mb-10">

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

      {/* ITEMS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="group bg-[#171a21]
            border border-[#262b35]
            rounded-2xl overflow-hidden
            hover:-translate-y-1 transition-all duration-300
            hover:border-cyan-400/40"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[180px] object-cover
                group-hover:scale-105 transition duration-500"
              />

              {/* RATING */}
              <div
                className="absolute top-3 left-3 bg-white
                text-black px-2 py-1 rounded-lg
                text-xs font-semibold"
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
                  <h2 className="text-lg font-semibold mb-1">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 text-xs">
                    {item.category}
                  </p>
                </div>

                <span className="text-cyan-400 text-lg font-bold">
                  ₹{item.price}
                </span>
              </div>

              <p className="text-gray-500 text-[13px] leading-5 mt-3 mb-4">
                Premium handcrafted flavor with fresh ingredients.
              </p>

              {/* BOTTOM */}
              <div className="flex items-center justify-between">

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