import React from 'react'

const Hero = () => {
  return (
 
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-28">

      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-400/30 bg-cyan-400/10 rounded-full text-xs text-cyan-400 mb-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          Premium Ice Cream Experience
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Life's Too Short <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            For Bad Ice Cream
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Handcrafted flavors made with love. Discover 50+ exotic flavors.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:-translate-y-1 transition">
            Explore Menu ✦
          </a>

          <a className="px-6 py-3 rounded-full border border-white/10 hover:text-cyan-400">
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero