import React, { useMemo, useState } from "react";
import { Star, Heart } from "lucide-react";

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
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");

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

      default:
        return filtered;
    }
  }, [search, sortType]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-4 md:px-10 py-24">

      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-10">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Ice Cream Delivery 🍦
          </h1>

          <p className="text-gray-400 mt-2">
            50+ delicious flavors available
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search ice creams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1c1f26] border border-[#2a2e38]
            px-4 py-3 rounded-xl outline-none w-full sm:w-[260px]"
          />

          {/* SORT */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-[#1c1f26] border border-[#2a2e38]
            px-4 py-3 rounded-xl outline-none"
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#1c1f26] rounded-3xl overflow-hidden
            hover:scale-[1.02] transition duration-300"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[240px] object-cover"
              />

              {/* RATING */}
              <div className="absolute top-4 left-4 bg-white text-black
              px-3 py-1 rounded-lg flex items-center gap-1 text-sm font-semibold">
                <Star size={14} fill="green" color="green" />
                {item.rating}
              </div>

              {/* HEART */}
              <button className="absolute top-4 right-4 bg-black/50
              backdrop-blur-md p-2 rounded-full">
                <Heart size={18} />
              </button>

              {/* OFFER */}
              <div className="absolute bottom-0 left-0 right-0
              bg-gradient-to-t from-black/90 to-transparent p-4">
                <h1 className="text-xl font-bold">
                  20% OFF
                </h1>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex justify-between items-start">

                <div>
                  <h1 className="text-xl font-bold">
                    {item.name}
                  </h1>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.category}
                  </p>
                </div>

                <h1 className="text-cyan-400 text-xl font-bold">
                  ₹{item.price}
                </h1>
              </div>

              {/* DELIVERY */}
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
                🚀 20 mins delivery
              </div>

              {/* BUTTON */}
              <button
                className="w-full mt-5 bg-orange-500 hover:bg-orange-600
                transition py-3 rounded-xl font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {sortedItems.length === 0 && (
        <div className="text-center mt-20 text-gray-400 text-lg">
          No items found 😢
        </div>
      )}
    </div>
  );
};

export default AvailableItems;