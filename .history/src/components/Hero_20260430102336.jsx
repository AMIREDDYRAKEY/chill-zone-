import { useEffect, useMemo, useRef } from "react";

const SCOOPS = Array.from({ length: 15 }, () => ({
  left:     `${(Math.random() * 100).toFixed(1)}%`,
  size:     `${(18 + Math.random() * 25).toFixed(1)}px`,
  duration: `${(12 + Math.random() * 10).toFixed(1)}s`,
  delay:    `-${(Math.random() * 10).toFixed(1)}s`,   // negative delay = already mid-flight on mount
}));

const Hero = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.background =
        `radial-gradient(120px circle at ${e.clientX}px ${e.clientY}px, rgba(6,132,182,0.15), transparent 90%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatWind {
          0%   { transform: translateY(0) rotate(0deg);   opacity: 0.5; }
          50%  { transform: translateY(-45vh) rotate(180deg); opacity: 0.3; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <section className="bg-[#130d2e] relative min-h-screen flex items-center justify-center text-center px-6 pt-28 overflow-hidden">

        {/* AURORA BLOBS */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[100px] rounded-full top-[-200px] left-[-100px] animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[100px] rounded-full top-[30%] right-[-150px] animate-pulse" />
          <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[100px] rounded-full bottom-[-100px] left-[30%] animate-pulse" />
        </div>

        {/* SPOTLIGHT */}
        <div ref={spotlightRef} className="pointer-events-none absolute inset-0" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* FLOATING SCOOPS — stable values from module-level constant */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {SCOOPS.map((s, i) => (
            <span
              key={i}
              className="absolute will-change-transform"
              style={{
                left: s.left,
                bottom: "-80px",
                fontSize: s.size,
                animation: `floatWind ${s.duration} linear ${s.delay} infinite`,
                opacity: 0.5,
              }}
            >
              🍦
            </span>
          ))}
        </div>

        {/* CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-400/30 bg-cyan-400/10 rounded-full text-xs text-cyan-400 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            Premium Ice Cream Experience
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Life's Too Short <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              For Bad Ice Cream
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Handcrafted flavors made with love. Discover 50+ exotic flavors.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:-translate-y-1 transition text-white">
              Explore Menu ✦
            </button>
            <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:text-cyan-400 transition">
              Our Story
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;