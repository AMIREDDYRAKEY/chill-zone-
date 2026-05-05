import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 border-t border-[#1d2736] bg-gradient-to-r from-[#020617] via-[#020617] to-[#020617] text-white px-10 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LEFT - BRAND */}
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">ChillZone 🍦</h1>
          <p className="text-[#8b97a8] mt-4 text-sm leading-relaxed">
            Crafting premium ice cream experiences since 2018. Every scoop is made with love.
          </p>

          {/* social icons */}
          <div className="flex gap-4 mt-6">
            {["📱", "💻", "📸", "▶️"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-[#0a1727] border border-[#1d2736] 
                flex items-center justify-center hover:scale-110 
                transition duration-300 cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* MENU */}
        <div>
          <h2 className="text-white font-semibold mb-4">Menu</h2>
          <ul className="text-[#8b97a8] text-sm space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer">Classic Flavors</li>
            <li className="hover:text-cyan-400 cursor-pointer">Exotic Scoops</li>
            <li className="hover:text-cyan-400 cursor-pointer">Vegan Options</li>
            <li className="hover:text-cyan-400 cursor-pointer">Seasonal Specials</li>
            <li className="hover:text-cyan-400 cursor-pointer">Sundaes & Shakes</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="text-[#8b97a8] text-sm space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer">About Us</li>
            <li className="hover:text-cyan-400 cursor-pointer">Our Story</li>
            <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
            <li className="hover:text-cyan-400 cursor-pointer">Press</li>
            <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-white font-semibold mb-4">Visit Us</h2>
          <ul className="text-[#8b97a8] text-sm space-y-2">
            <li>Hyderabad, TS</li>
            <li>Mon–Sun: 11am–11pm</li>
            <li>+91 98765 43210</li>
            <li>hello@chillzone.in</li>
          </ul>
        </div>
      </div>

      {/* bottom line */}
      <div className="border-t border-[#1d2736] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-[#6b7280] text-sm">
        <p>© 2026 ChillZone • All rights reserved</p>
        <p className="mt-2 md:mt-0">
          Made with <span className="text-red-500">❤️</span> for ice cream lovers
        </p>
      </div>
    </div>
  );
};

export default Footer;