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
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-24 bg-gradient-to-br from-[#09071a] via-[#0e0b22] to-[#120920] text-white">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Available Ice Creams 🍦
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Explore our delicious handcrafted flavors.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">

        {/* Search */}
        <input
          type="text"
          placeholder="Search flavors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[320px] bg-[#111827] border border-[#243041] rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
        />

        {/* Sort */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="bg-[#111827] border border-[#243041] rounded-xl px-4 py-3 outline-none focus:border-purple-400"
        >
          <option value="default">Sort By</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0a1727] border border-[#1d2736] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[300px] h-[140px]"
            />

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <span className="text-yellow-400 text-sm">
                  ⭐ {item.rating}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                {item.category}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-cyan-400 text-lg font-bold">
                  ₹{item.price}
                </span>

                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm hover:opacity-90 transition">
                  Add to Cart
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