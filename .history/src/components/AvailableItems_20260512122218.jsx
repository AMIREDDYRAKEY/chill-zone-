import React, { useMemo, useState } from "react";

const itemsData = [

  // ================= ICE CREAMS =================

  {
    id: 1,
    name: "Vanilla",
    type: "Ice Cream",
    category: "Classic",
    small: 30,
    large: 55,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Strawberry",
    type: "Ice Cream",
    category: "Fruit",
    small: 30,
    large: 55,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Plain Pista",
    type: "Ice Cream",
    category: "Pista",
    small: 35,
    large: 65,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Butterscotch",
    type: "Ice Cream",
    category: "Classic",
    small: 40,
    large: 75,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Chocolate",
    type: "Ice Cream",
    category: "Chocolate",
    small: 40,
    large: 75,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    name: "Alphonso Mango",
    type: "Ice Cream",
    category: "Mango",
    small: 40,
    large: 75,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1629385701021-fcd568a74336?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    name: "Tutty Fruity",
    type: "Ice Cream",
    category: "Fruit",
    small: 40,
    large: 75,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    name: "Fresh Pine Apple",
    type: "Ice Cream",
    category: "Fruit",
    small: 45,
    large: 85,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 9,
    name: "Black Current",
    type: "Ice Cream",
    category: "Berry",
    small: 45,
    large: 85,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 10,
    name: "Kaju Kismis",
    type: "Ice Cream",
    category: "Dry Fruits",
    small: 45,
    large: 85,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 11,
    name: "American Nuts",
    type: "Ice Cream",
    category: "Nuts",
    small: 50,
    large: 95,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 12,
    name: "Chocolate Walnuts",
    type: "Ice Cream",
    category: "Chocolate",
    small: 55,
    large: 105,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 13,
    name: "Dry Fruit Special",
    type: "Ice Cream",
    category: "Premium",
    small: 55,
    large: 105,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 14,
    name: "Kulfi",
    type: "Ice Cream",
    category: "Traditional",
    small: 55,
    large: 105,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1633933358116-a27b902fad35?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= MOJITOS =================

  {
    id: 15,
    name: "Orange Mojito",
    type: "Mojito",
    category: "Citrus",
    price: 69,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 16,
    name: "Strawberry Mojito",
    type: "Mojito",
    category: "Berry",
    price: 69,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 17,
    name: "Water Melon Mojito",
    type: "Mojito",
    category: "Fruit",
    price: 69,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 18,
    name: "Green Apple Mojito",
    type: "Mojito",
    category: "Apple",
    price: 79,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 19,
    name: "Lime & Mint Mojito",
    type: "Mojito",
    category: "Mint",
    price: 79,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 20,
    name: "Blue Curacao Mojito",
    type: "Mojito",
    category: "Blue Curacao",
    price: 79,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= MILK SHAKES =================

  {
    id: 21,
    name: "Vanilla Shake",
    type: "Milk Shake",
    category: "Classic",
    price: 89,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 22,
    name: "Strawberry Shake",
    type: "Milk Shake",
    category: "Fruit",
    price: 89,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1553787499-6f913324e66f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 23,
    name: "Plain Pista Shake",
    type: "Milk Shake",
    category: "Pista",
    price: 99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 24,
    name: "Chocolate Shake",
    type: "Milk Shake",
    category: "Chocolate",
    price: 109,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 25,
    name: "Black Current Shake",
    type: "Milk Shake",
    category: "Berry",
    price: 119,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 26,
    name: "Butter Scotch Shake",
    type: "Milk Shake",
    category: "Classic",
    price: 109,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 27,
    name: "Oreo Chocolate",
    type: "Milk Shake",
    category: "Oreo",
    price: 129,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 28,
    name: "Chocolate Vanilla",
    type: "Milk Shake",
    category: "Combo",
    price: 129,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 29,
    name: "Chocolate Strawberry",
    type: "Milk Shake",
    category: "Combo",
    price: 129,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1553787499-6f913324e66f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 30,
    name: "Oreo Strawberry",
    type: "Milk Shake",
    category: "Oreo",
    price: 129,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 31,
    name: "Oreo Dry Fruit Special",
    type: "Milk Shake",
    category: "Premium",
    price: 129,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=1200&auto=format&fit=crop",
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
      <div className="flex flex-col md:flex-row gap-3 justify-between mb-5">

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