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
    return (
  <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-br from-[#09071a] via-[#0e0b22] to-[#120920] text-white">

    {/* Heading */}
    <div className="text-center mb-14">
      <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
        Premium Flavors
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Available Ice Creams 🍦
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
        Explore handcrafted flavors made with natural ingredients and frozen happiness.
      </p>
    </div>

    {/* Controls */}
    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mb-14">

      {/* Search */}
      <input
        type="text"
        placeholder="Search flavors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full lg:w-[350px] bg-[#111827]/80 backdrop-blur-md border border-[#243041]
        rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
      />

      {/* Sort */}
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="w-full lg:w-[240px] bg-[#111827]/80 backdrop-blur-md border border-[#243041]
        rounded-2xl px-5 py-4 outline-none focus:border-purple-400 transition"
      >
        <option value="default">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="rating">Top Rated</option>
        <option value="name">Name A-Z</option>
      </select>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">

      {sortedItems.map((item) => (
        <div
          key={item.id}
          className="group bg-[#0b1220]/90 border border-[#1d2736]
          rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2
          hover:border-cyan-400/40 transition-all duration-500"
        >

          {/* Image */}
          <div className="overflow-hidden relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-sm text-yellow-400">
              ⭐ {item.rating}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">

            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  {item.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  {item.category}
                </p>
              </div>

              <span className="text-cyan-400 text-2xl font-bold">
                ₹{item.price}
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-6 mb-6">
              Delicious creamy flavor made with premium ingredients and fresh toppings.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">

              <button
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500
                font-semibold hover:opacity-90 transition"
              >
                Add to Cart
              </button>

              <button
                className="px-5 rounded-2xl border border-[#243041]
                hover:border-cyan-400 transition"
              >
                ❤️
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Empty */}
    {sortedItems.length === 0 && (
      <div className="text-center mt-24 text-gray-400 text-lg">
        No items found 😢
      </div>
    )}
  </div>
);
  );
};

export default AvailableItems;