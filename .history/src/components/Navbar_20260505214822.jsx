import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/cta" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-[#020617]/60 border-b border-white/10">

      {/* Logo */}
      <Link to="/" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Chill<span className="text-pink-500">Zone</span> 🍦
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`transition ${
                location.pathname === link.path
                  ? "text-cyan-400 font-semibold"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/cta"
        className="hidden md:block px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500"
      >
        Order Now →
      </Link>

      {/* Mobile Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-lg transition-all duration-300 
        ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>

        <ul className="flex flex-col items-center gap-6 py-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === link.path
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link
            to="/cta"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Order Now →
          </Link>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar