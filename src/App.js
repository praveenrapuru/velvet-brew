import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingBookButton from "./components/ui/FloatingBookButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// main app component

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-velvet-50 dark:bg-espresso transition-colors">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
          <FloatingBookButton />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
