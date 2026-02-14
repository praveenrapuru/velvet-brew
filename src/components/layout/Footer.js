import { Link } from "react-router-dom";

// footer component
function Footer() {
  const year = new Date().getFullYear();  // for copyright

  return (
    <footer className="bg-velvet-800 dark:bg-velvet-900 text-velvet-300 py-12">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">☕</span>
              <span className="font-display text-xl font-bold text-white">Velvet Brew</span>
            </div>
            <p className="text-sm text-velvet-400 mb-4">
              Premium coffee and desserts in the heart of Bengaluru.
            </p>
            {/* social links */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-velvet-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-velvet-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-sm">FB</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-velvet-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-sm">X</span>
              </a>
            </div>
          </div>

          {/* links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Visit Us</h4>
            <ul className="space-y-2 text-sm text-velvet-400">
              <li>📍 123 MG Road, Bengaluru</li>
              <li>📞 +91 98765 43210</li>
              <li>📧 hello@velvetbrew.in</li>
              <li>⏰ 8 AM - 10 PM (All days)</li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-velvet-700 pt-6 text-center text-sm text-velvet-500">
          <p>© {year} Velvet Brew Café. Made with ☕ in Bengaluru</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
