import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // handle scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-espresso/90 backdrop-blur shadow-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-velvet-800 dark:text-white">
            Velvet Brew
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium transition-colors ${
                isActive(link.to)
                  ? "text-gold"
                  : "text-velvet-600 dark:text-velvet-300 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile menu btn */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-velvet-900 border-t dark:border-velvet-700 px-4 py-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-2 ${isActive(link.to) ? "text-gold" : "text-velvet-700 dark:text-velvet-200"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
