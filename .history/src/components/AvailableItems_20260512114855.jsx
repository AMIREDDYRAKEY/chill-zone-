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

export default AvailableItems;