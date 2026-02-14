import { useEffect, useState } from "react";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // small delay for animation
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* bg image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* content */}
      <div className={`relative z-10 text-center px-4 max-w-3xl transition-all duration-700 ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>

        {/* badge */}
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/20">
          <span className="text-white/80 text-sm">Est. 2020 • Bengaluru</span>
        </div>

        {/* heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Where Every Sip <br />
          <span className="text-gold">Tells a Story</span>
        </h1>

        {/* subtitle */}
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Premium coffee, homemade desserts, and a cozy space to work, relax, or catch up with friends.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="btn-primary">
            View Menu
          </a>
          <a href="#booking" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-velvet-800">
            Book a Table
          </a>
        </div>
      </div>

      {/* scroll indicator - only on desktop */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
