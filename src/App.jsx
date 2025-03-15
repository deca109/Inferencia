import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
const Registration = React.lazy(() => import("./pages/Registration.jsx"));
const Seminar = React.lazy(() => import("./pages/Seminar.jsx"));
const StocastOLiga = React.lazy(() => import("./pages/StocastOLiga.jsx"));
const FAQ = React.lazy(() => import("./pages/FAQ.jsx"));
const ContactUs = React.lazy(() => import("./pages/ContactUs.jsx"));
import { useState, Suspense } from "react";
import rkmrcLogo from "./assets/rkmrc logo.png";
import dostLogo from "./assets/dost round logo.png";
import Preloader from "./components/preloader.jsx";
import backgroundVideo from "./assets/night.mp4";
import { Menu, X } from "lucide-react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      {/* Background Video */}
      <div className="fixed inset-0 w-screen h-full overflow-hidden -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Main Content */}

      <div className="w-full h-full min-h-screen flex flex-col overflow-x-hidden">
        <nav
          id="topnav"
          className="bg-gray-900 bg-opacity-80 text-white fixed top-0 left-0 w-full z-100"
        >
          <div className="flex items-center justify-between py-2 px-6 md:px-8 relative">
            {/* Logos (Left Side) */}
            <div className="flex items-center space-x-4">
              <img src={rkmrcLogo} alt="RKMRC Logo" className="h-12" />
              <img src={dostLogo} alt="DOST Logo" className="h-16 mt-1" />
            </div>

            {/* Centered Text */}
            <div className="text-center font-semibold text-lg md:text-xl">
              <Link to="/" className="hover:text-[#f8a71b] transition">
                Dept. of Statistics, RKMRC
              </Link>
            </div>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Desktop Menu (Right Side) */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-[#f8a71b] transition">
                Home
              </Link>
              <Link
                to="/registration"
                className="hover:text-[#f8a71b] transition"
              >
                Registration
              </Link>
              <Link to="/seminar" className="hover:text-[#f8a71b] transition">
                Seminar
              </Link>
              <Link
                to="/stocast-o-liga"
                className="hover:text-[#f8a71b] transition"
              >
                Stochast-o-Liga
              </Link>
              <Link to="/faq" className="hover:text-[#f8a71b] transition">
                FAQ
              </Link>
              <Link to="/contact" className="hover:text-[#f8a71b] transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Side Menu */}
          <div
            className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 shadow-lg transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={30} />
            </button>
            <div className="flex flex-col items-start space-y-6 p-8 text-lg">
              <Link
                to="/"
                className="hover:text-[#f8a71b] transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/registration"
                className="hover:text-[#f8a71b] transition"
                onClick={() => setIsOpen(false)}
              >
                Registration
              </Link>
              <Link
                to="/seminar"
                className="hover:text-[#f8a71b] transition"
                onClick={() => setIsOpen(false)}
              >
                Seminar
              </Link>
              <Link
                to="/stocast-o-liga"
                className="hover:text-[#f8a71b] transition"
                onClick={() => setIsOpen(false)}
              >
                Stochast-o-Liga
              </Link>
              <Link
                to="/faq"
                className="hover:text-[#f8a71b] transition"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="hover:text-[#f8a71b] transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow max-w-screen h-full">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Preloader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/seminar" element={<Seminar />} />
            <Route path="/stocast-o-liga" element={<StocastOLiga />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
