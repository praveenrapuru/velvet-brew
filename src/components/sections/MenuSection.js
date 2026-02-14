import { useState } from "react";
import menuData from "../../data/menuData";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const categories = ["all", "coffee", "desserts", "snacks"];

function MenuSection() {
  const [filter, setFilter] = useState("all");
  const { ref, isVisible } = useScrollAnimation();

  // filter items
  const items = filter === "all"
    ? menuData
    : menuData.filter(item => item.category === filter);

  return (
    <section id="menu" ref={ref} className="py-20 bg-velvet-50 dark:bg-velvet-900">
      <div className="max-w-6xl mx-auto px-4">

        {/* header */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-4"
        }`}>
          <h2 className="section-title">Our Menu</h2>
          <p className="text-velvet-500 dark:text-velvet-400">
            Handcrafted drinks and fresh baked goods
          </p>
        </div>

        {/* filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full capitalize transition-all ${
                filter === cat
                  ? "bg-gold text-white"
                  : "bg-white dark:bg-velvet-800 text-velvet-600 dark:text-velvet-300 hover:bg-velvet-100 dark:hover:bg-velvet-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`card overflow-hidden group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* image */}
              <div className="h-48 bg-velvet-200 dark:bg-velvet-700 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // fallback if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
                {/* popular badge */}
                {item.popular && (
                  <span className="absolute top-3 right-3 bg-gold text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-semibold text-velvet-800 dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-gold font-bold">{item.price}</span>
                </div>
                <p className="text-velvet-500 dark:text-velvet-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* empty state */}
        {items.length === 0 && (
          <p className="text-center text-velvet-500 py-10">
            No items found in this category
          </p>
        )}
      </div>
    </section>
  );
}

export default MenuSection;
