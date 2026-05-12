import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-[#020617]/60 border-b border-white/10">

      {/* Logo */}
      <Link
        to="/"
        className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Chill<span className="text-pink-500">Zone</span> 🍦
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-400">
        <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
        <li><Link to="/menu" className="hover:text-cyan-400">Menu</Link></li>
        <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
        <li><Link to="/reviews" className="hover:text-cyan-400">Reviews</Link></li>
        <li><Link to="/gallery" className="hover:text-cyan-400">Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
      </ul>

      {/* CTA */}
      <button
        onClick={() => navigate("/order")}
        className="hidden md:block px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-80 transition"
      >
        Order Now →
      </button>

      {/* Mobile Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 
        ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-gray-300 text-sm">

          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

          <button
            onClick={() => {
              navigate("/order");
              setIsOpen(false);
            }}
            className="px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Order Now →
          </button>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;