import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-[#020617]/60 border-b border-white/10">
      
      {/* Logo */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Chill<span className="text-pink-500">Zone</span> 🍦
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-400">
        <li><a href="#menu" className="hover:text-cyan-400">Menu</a></li>
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#reviews" className="hover:text-cyan-400">Reviews</a></li>
        <li><a href="#gallery" className="hover:text-cyan-400">Gallery</a></li>
        <li><a href="#cta" className="hover:text-cyan-400">Contact</a></li>
      </ul>

      {/* CTA */}
      <a
        href="#cta"
        className="px-5 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-80"
      >
        Order Now →
      </a>
    </nav>
  )
}

export default Navbar