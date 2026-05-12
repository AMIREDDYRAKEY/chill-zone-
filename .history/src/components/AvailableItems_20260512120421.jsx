import React, { useMemo, useState } from "react";

const itemsData = [
  {
    id: 1,
    name: "Chocolate Blast",
    category: "Chocolate",
    price: 149,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Strawberry Swirl",
    category: "Fruit",
    price: 129,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mint Heaven",
    category: "Mint",
    price: 179,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1633933358116-a27b902fad35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Vanilla Dream",
    category: "Classic",
    price: 99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Blueberry Chill",
    category: "Fruit",
    price: 199,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Caramel Crunch",
    category: "Caramel",
    price: 159,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop",
  },
];

const AvailableItems = () => {
  const [sortType, setSortType] = useState("default");
  const [search, setSearch] = useState("");

  const sortedItems = useMemo(() => {
    let filtered = [...itemsData].filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortType) {
      case "low-high":
        return filtered.sort((a, b) => a.price - b.price);

      case "high-low":
        return filtered.sort((a, b) => b.price - a.price);

      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);

      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return filtered;
    }
  }, [sortType, search]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-4 sm:px-6 lg:px-12 py-24">

      {/* Heading */}
      <div className="mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Available Ice Creams 🍦
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Explore premium handcrafted flavors
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

          {/* Search */}
          <input
            type="text"
            placeholder="Search flavors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1a1d24] border border-[#2b2f38]
            rounded-xl px-4 py-3 outline-none w-full sm:w-[260px]
            text-sm focus:border-cyan-400 transition"
          />

          {/* Sort */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-[#1a1d24] border border-[#2b2f38]
            rounded-xl px-4 py-3 outline-none text-sm
            focus:border-cyan-400 transition"
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="group max-w-[340px] mx-auto bg-[#171a21]
            border border-[#262b35] rounded-2xl overflow-hidden
            hover:-translate-y-1 transition-all duration-300
            hover:border-cyan-400/40"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[190px] object-cover
                group-hover:scale-105 transition duration-500"
              />

              {/* Rating */}
              <div className="absolute top-3 left-3 bg-white
              text-black px-2 py-1 rounded-lg text-xs font-semibold">
                ⭐ {item.rating}
              </div>

              {/* Offer */}
              <div className="absolute bottom-0 left-0 right-0
              bg-gradient-to-t from-black/90 to-transparent p-3">

                <p className="text-sm font-semibold">
                  20% OFF on first order
                </p>
              </div>
            </div>

            {/* Content */}
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
                Delicious creamy flavor made with premium ingredients.
              </p>

              {/* Bottom */}
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

      {/* Empty State */}
      {sortedItems.length === 0 && (
        <div className="text-center mt-20 text-gray-400">
          No items found 😢
        </div>
      )}
    </div>
  );
};

export default AvailableItems;