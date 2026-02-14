import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <main className="pt-20">
      {/* hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-velvet-800">
        <div className="text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
            Our Story
          </h1>
          <p className="text-velvet-300">How it all started</p>
        </div>
      </section>

      {/* story */}
      <section ref={ref} className="py-16 bg-velvet-50 dark:bg-velvet-900">
        <div className="max-w-4xl mx-auto px-4">

          <div className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}>

            {/* image */}
            <div>
              <img
                src="/images/about.jpg"
                alt="Coffee shop interior"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* text */}
            <div>
              <span className="text-gold font-medium">Est. 2020</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-velvet-800 dark:text-white mt-1 mb-4">
                The Beginning
              </h2>

              <div className="space-y-4 text-velvet-600 dark:text-velvet-300">
                <p>
                  Velvet Brew started as a small passion project. Two friends who loved coffee
                  decided to create a space where people could enjoy quality brews in a cozy environment.
                </p>
                <p>
                  We opened our first cafe on MG Road, Bengaluru in early 2020. What started as a
                  10-seater has now grown into a community favorite with regulars who visit us daily.
                </p>
                <p>
                  We source our beans from local farms in Coorg and roast them in small batches
                  to ensure freshness. Every cup is made with care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* values - keeping it simple */}
      <section className="py-16 bg-white dark:bg-velvet-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-velvet-800 dark:text-white mb-8">
            What We Believe In
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: "☕", title: "Quality", desc: "Only the best beans" },
              { emoji: "🌱", title: "Sustainability", desc: "Eco-friendly practices" },
              { emoji: "❤️", title: "Community", desc: "A space for everyone" },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-velvet-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-velvet-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
