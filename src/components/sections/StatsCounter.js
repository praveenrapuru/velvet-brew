import { useState, useEffect, useRef } from "react";

// stats data
const stats = [
  { label: "Years", value: 4, suffix: "+" },
  { label: "Happy Customers", value: 8000, suffix: "+" },
  { label: "Menu Items", value: 40, suffix: "+" },
  { label: "Rating", value: 4.8, suffix: "★", decimal: true },
];

// animated counter component
function Counter({ end, duration = 2000, decimal = false, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  // intersection observer to start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  // animate count
  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

function StatsCounter() {
  return (
    <section className="py-16 bg-velvet-800 dark:bg-espresso">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-white mb-12">
          Our Journey So Far
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
                <Counter
                  end={stat.value}
                  decimal={stat.decimal}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-velvet-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatsCounter;
