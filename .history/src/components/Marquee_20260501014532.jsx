import React from "react";
import "./index.css";

const items = [
  { icon: "🍦", text: "Artisan Scoops" },
  { icon: "🧊", text: "Fresh Daily" },
  { icon: "🌿", text: "Natural Flavors" },
  { icon: "🚀", text: "Fast Delivery" },
  { icon: "⭐", text: "4.9 Rating" },
  { icon: "🎉", text: "New Flavors Weekly" },
  { icon: "💜", text: "Made with Love" },
  { icon: "🍓", text: "Farm Fresh Fruits" },
];

const Marquee = () => {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <div className="marquee-item" key={index}>
            <span className="marquee-dot">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;