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
    <div className="w-full overflow-hidden">
      <div className="marquee-section border-y-2 border-[#162232] bg-[#110f24] h-[60px] sm:h-[70px] md:h-[80px] flex items-center">
        
        <div className="marquee-track flex items-center gap-6 sm:gap-10 md:gap-14 px-4">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="marquee-item flex items-center gap-2 text-white 
                         text-sm sm:text-base md:text-lg whitespace-nowrap"
            >
              <span className="text-lg sm:text-xl md:text-2xl">
                {item.icon}
              </span>
              {item.text}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Marquee;