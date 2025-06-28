import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import {
  FaPhone,
  FaBars,
  FaTimes,
  FaTools,
  FaHome,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import { GiCooler } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo with AC icon */}
        <div className="flex items-center space-x-3">
          <a href="/">
            <img
              src={logo}
              alt="Karnika AC Services"
              className="h-10 w-auto sm:h-12 object-contain"
            />
          </a>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className={`flex items-center gap-2 font-medium transition-all duration-300 group ${
              isScrolled
                ? "text-blue-900 hover:text-orange-500"
                : "text-white/90 hover:text-white"
            }`}
          >
            <FaHome
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-blue-600 group-hover:text-orange-500"
                  : "text-white/80 group-hover:text-white"
              }`}
            />
            <span>Home</span>
          </a>
          <a
            href="#services"
            className={`flex items-center gap-2 font-medium transition-all duration-300 group ${
              isScrolled
                ? "text-blue-900 hover:text-orange-500"
                : "text-white/90 hover:text-white"
            }`}
          >
            <FaTools
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-blue-600 group-hover:text-orange-500"
                  : "text-white/80 group-hover:text-white"
              }`}
            />
            <span>Services</span>
          </a>
          <a
            href="#about"
            className={`flex items-center gap-2 font-medium transition-all duration-300 group ${
              isScrolled
                ? "text-blue-900 hover:text-orange-500"
                : "text-white/90 hover:text-white"
            }`}
          >
            <FaUsers
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-blue-600 group-hover:text-orange-500"
                  : "text-white/80 group-hover:text-white"
              }`}
            />
            <span>About</span>
          </a>
          <a
            href="#contact"
            className={`flex items-center gap-2 font-medium transition-all duration-300 group ${
              isScrolled
                ? "text-blue-900 hover:text-orange-500"
                : "text-white/90 hover:text-white"
            }`}
          >
            <FaEnvelope
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-blue-600 group-hover:text-orange-500"
                  : "text-white/80 group-hover:text-white"
              }`}
            />
            <span>Contact</span>
          </a>
          <a
            href="tel:+919910492803"
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-orange-500/30"
                : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            }`}
          >
            <FaPhone className="animate-pulse" />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled
                ? "text-blue-900 hover:bg-blue-50"
                : "text-white hover:bg-white/20"
            }`}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#home"
            className="block py-3 px-4 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-4 text-blue-900"
          >
            <FaHome className="text-blue-600" />
            <span>Home</span>
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#services"
            className="block py-3 px-4 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-4 text-blue-900"
          >
            <FaTools className="text-blue-600" />
            <span>Services</span>
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#about"
            className="block py-3 px-4 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-4 text-blue-900"
          >
            <FaUsers className="text-blue-600" />
            <span>About</span>
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#contact"
            className="block py-3 px-4 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-4 text-blue-900"
          >
            <FaEnvelope className="text-blue-600" />
            <span>Contact</span>
          </a>
          <a
            href="tel:+919910492803"
            className="block mt-4 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3"
          >
            <FaPhone className="animate-pulse" />
            <span>Emergency Call</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
