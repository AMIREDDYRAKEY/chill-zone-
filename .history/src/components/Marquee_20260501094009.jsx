import React from "react";
import "../index.css";

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
    <div className='h-[100px] bg-[#040d1e]  '>
    <div className="marquee-section   border-t-[2px] border-[#162232] border-b-[2px] h-[65px] bg-[#110f24] flex justify-center items-center">
      <div className="marquee-track flex justify-center items-center ">
        {[...items, ...items].map((item, index) => (
          <div className="marquee-item   text-center" key={index}>
            <span className="marquee-dot">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Marquee;