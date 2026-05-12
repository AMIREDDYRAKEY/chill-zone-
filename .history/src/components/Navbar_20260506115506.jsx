import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate=useNavigate()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-[#020617]/60 border-b border-white/10">

      {/* Logo */}
      <a href="#home" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Chill<span className="text-pink-500">Zone</span> 🍦
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-400">
        <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
        <li><a href="#menu" className="hover:text-cyan-400 transition">Menu</a></li>
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#reviews" className="hover:text-cyan-400 transition">Reviews</a></li>
        <li><a href="#gallery" className="hover:text-cyan-400 transition">Gallery</a></li>
        <li><a href="#cta" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>

      {/* CTA */}
      <a
      
        onClick={()=>navigate(<Login/>)}
        className="hidden md:block px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-80 transition"
      >
        Order Now →
      </a>

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

          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a></li>
          <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li><a href="#cta" onClick={() => setIsOpen(false)}>Contact</a></li>

          <button
            href="#cta"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Order Now →
          </button>

        </ul>
      </div>

    </nav>
  )
}

export default Navbar