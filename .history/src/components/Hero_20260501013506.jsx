import { useEffect, useRef, useState } from "react";

const SCOOPS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${5 + Math.floor(Math.random() * 90)}%`,
  fontSize: `${16 + Math.floor(Math.random() * 18)}px`,
  duration: `${16 + Math.floor(Math.random() * 12)}s`,
  delay: `${Math.floor(Math.random() * 10)}s`,
}));

const Hero = () => {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX + "px", y: e.clientY + "px" });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}
    >
       

      {/* ── SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(50px circle at ${pos.x} ${pos.y}, rgba(139,92,246,0.08), transparent 75%)`,
        }}
      />

      {/* ── SUBTLE GRID   */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "82px 72px",
        }}
      />

      {/* ── FLOATING SCOOPS (very subtle)   */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {SCOOPS.map((s) => (
          <span
            key={s.id}
            className="absolute"
            style={{
              left: s.left,
              top: "-60px",
              fontSize: s.fontSize,
              opacity: 0.10,
              filter: "blur(0.6px) grayscale(30%)",
              animation: `floatWind ${s.duration} linear ${s.delay} infinite`,
            }}
          >
            🍦
          </span>
        ))}
      </div>

      {/* ── MAIN CONTENT   */}
      <div className="relative z-20 text-center px-6 pt-28 pb-20 max-w-4xl mx-auto w-full">

        {/* Eyebrow */}
        <div className="anim-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium">
            Premium Artisan Ice Cream
          </span>
        </div>

        {/* Headline */}
        <h1 className="anim-fade-up-1 font-black tracking-tight leading-[1.05] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="block text-4xl md:text-6xl lg:text-5xl text-white/90 mb-2">
            Life's Too Short
          </span>
          <span
            className="text-shimmer block text-4xl md:text-6xl lg:text-7xl"
          >
            For Bad Ice Cream
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="anim-fade-up-2 text-white/40 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-light">
          Handcrafted with the finest ingredients. Over{" "}
          <span className="text-purple-300/80">50 exotic flavors</span> crafted
          to perfection — every scoop, an experience.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up-3 flex items-center justify-center gap-4 flex-wrap mb-16">
          <button
            id="hero-explore-btn"
            className="group relative px-8 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
              boxShadow: "0 0 0 0 rgba(139,92,246,0)",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 30px rgba(139,92,246,0.45)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(139,92,246,0)"}
          >
            Explore Menu
            <span className="ml-2 opacity-70">→</span>
          </button>

          <button
            id="hero-story-btn"
            className="px-8 py-3.5 rounded-full text-sm font-medium text-white/60 border border-white/10 hover:border-purple-400/40 hover:text-white/90 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Our Story
          </button>
        </div>

        {/* Divider */}
        <div className="anim-fade-up-4 flex items-center gap-4 max-w-xs mx-auto mb-10">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08))" }} />
          <span className="text-white/20 text-xs tracking-widest">EST. 2024</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)" }} />
        </div>

        {/* Stats */}
        <div className="anim-fade-up-4 flex items-center justify-center gap-10 flex-wrap">
          {[
            { val: "50+",  label: "Flavors" },
            { val: "10K+", label: "Customers" },
            { val: "4.9",  label: "Rating" },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                className="text-2xl font-bold text-white/85"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {val}
              </span>
              <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="marquee-section overflow-hidden relative ">
  <div className="marquee-track flex gap-10">
    {[...Array(20)].map((_, i) => (
      <span key={i} className="text-4xl ">
        {["🍦","🍧","🍨","🧁","🍓"][i % 5]}
      </span>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;