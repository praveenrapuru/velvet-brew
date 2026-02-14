import { useState, useEffect } from "react";

// floating book button for mobile
// shows after scrolling down

function FloatingBookButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show after scrolling 400px
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // only show on mobile
  return (
    <button
      onClick={handleClick}
      className={`md:hidden fixed bottom-5 right-5 z-40 w-14 h-14 bg-gold text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Book a table"
    >
      {/* calendar icon */}
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </button>
  );
}

export default FloatingBookButton;
