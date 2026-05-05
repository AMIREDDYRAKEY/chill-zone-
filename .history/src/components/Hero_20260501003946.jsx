import { useEffect, useState } from "react";

const Hero = () => {
  const [pos, setPos] = useState({ x: "10%", y: "10%" });

  // 🎯 Spotlight mouse tracking
  useEffect(() => {
  const move = (e) => {
    setPos({
      x: e.clientX + "px",
      y: e.clientY + "px",
    });
  };
  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}, []);

  return (
    <section className="bg-[#130d2e] relative min-h-screen flex items-center justify-center text-center px-6 pt-28 overflow-hidden">

      {/* 🌈 AURORA BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[100px] rounded-full top-[-200px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[100px] rounded-full top-[30%] right-[-150px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[100px] rounded-full bottom-[-100px] left-[30%] animate-pulse"></div>
      </div>

      {/* 🎯 SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(100px circle at ${pos.x} ${pos.y}, rgba(6,132,182,0.1), transparent 90%)`,
        }}
      />

      {/* 🟦 GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px] mask-radial-faded" />

      {/* 🍦 FLOATING SCOOPS */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
  {[...Array(15)].map((_, i) => (
   <span
  key={i}
  className="absolute animate-floatWind"
  style={{
    left: `${Math.random() * 100}%`,
    bottom: "-80px",
    fontSize: `${18 + Math.random() * 25}px`,
    animationDuration: `${10 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 5}s`,
  }}
>
  🍦
</span>
  ))} 
</div>

      {/* MAIN CONTENT */}
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-400/30 bg-cyan-400/10 rounded-full text-xs text-cyan-400 mb-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          Premium Ice Cream Experience
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Life's Too Short <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            For Bad Ice Cream
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Handcrafted flavors made with love. Discover 50+ exotic flavors.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:-translate-y-1 transition">
            Explore Menu ✦
          </button>

          <button className="px-6 py-3 rounded-full border border-white/10 hover:text-cyan-400">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;