import { useState, useEffect } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaCalendarAlt,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { GiTechnoHeart, GiCooler } from "react-icons/gi";
import heroImage from "../assets/Karnika-Ac-Repair.webp";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-blue-900 to-indigo-900"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('../assets/repairman-doing-air-conditioner-service.jpg')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-400/30 border border-teal-300/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 25 + 10}px`,
              height: `${Math.random() * 25 + 10}px`,
              animation: `float ${
                Math.random() * 10 + 6
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.4,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full border border-teal-300/60 shadow-xl transform hover:scale-105 transition duration-300">
              <GiTechnoHeart className="text-2xl text-orange-200" />
              <span className="font-semibold tracking-wider text-sm uppercase">
                Elite AC Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">
                Stay Cool
              </span>{" "}
              <br />
              with Expert AC Repair
            </h1>

            <p className="text-lg text-teal-100 mb-8 max-w-lg leading-relaxed">
              Top-tier AC repair and maintenance by certified pros. Fast,
              reliable, and guaranteed to keep your home comfortable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href="tel:+919910492803"
                className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/60 transition-all transform hover:scale-105 duration-300"
              >
                <FaPhone className="text-xl group-hover:animate-bounce" />
                <div>
                  <div className="text-xs font-light uppercase">
                    24/7 Support
                  </div>
                  <div>+91-9910492803</div>
                </div>
              </a>
              <a
                href="https://wa.me/919910492803?text=Hello%20Karnika%20AC%20Services%2C%20I%20need%20assistance%20with%20my%20AC.%20Could%20you%20please%20help%20me%20with%20repair%20or%20servicing%3F%20Thank%20you%21"
                className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-teal-500/60 transition-all transform hover:scale-105 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl group-hover:animate-bounce" />
                <div>
                  <div className="text-xs font-light uppercase">Quick Chat</div>
                  <div>Message on WhatsApp</div>
                </div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-teal-900/40 border border-teal-700/50 rounded-xl p-4 transform hover:scale-105 transition duration-300">
                <div className="bg-orange-700/50 p-2 rounded-full">
                  <FaCheckCircle className="text-orange-300" />
                </div>
                <span className="text-sm font-medium">Same-Day Fixes</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-900/40 border border-teal-700/50 rounded-xl p-4 transform hover:scale-105 transition duration-300">
                <div className="bg-orange-700/50 p-2 rounded-full">
                  <GiCooler className="text-orange-300" />
                </div>
                <span className="text-sm font-medium">All Brands Serviced</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-900/40 border border-teal-700/50 rounded-xl p-4 transform hover:scale-105 transition duration-300">
                <div className="bg-orange-700/50 p-2 rounded-full">
                  <FaShieldAlt className="text-orange-300" />
                </div>
                <span className="text-sm font-medium">1-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition duration-500 border-2 border-teal-500/40">
              <img
                src={heroImage}
                alt="Expert AC Technician"
                className="w-full h-auto object-contain sm:max-h-[550px] md:max-h-[650px] lg:max-h-[700px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent"></div>
            </div>
          </div>
          {/* Floating Guarantee Badge */}
          <div className="absolute top-20 right-8 bg-white/95 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-orange-200/50 transform hover:scale-110 transition duration-300">
            <div className="text-center">
              <div className="text-xs text-gray-600 uppercase">
                Our Guarantee
              </div>
              <div className="text-3xl font-bold text-orange-500">100%</div>
              <div className="text-xs font-semibold text-gray-800">
                Satisfaction
              </div>
            </div>
          </div>
                 {/* Floating Appointment Card - Moved to top left */}
            <div className="absolute top-16 left-96 bg-white p-4 rounded-2xl shadow-2xl w-64 border border-teal-100/60 transform hover:scale-105 transition duration-300 z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <FaCalendarAlt className="text-orange-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Schedule Now</h3>
                  <p className="text-xs text-gray-500">Open 24/7</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Diagnostic Fee:</span>
                  <span className="font-bold text-orange-500">Free*</span>
                </div>
                <a
                  href="#contact"
                  className="block text-center bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white py-2 px-4 rounded-xl font-semibold shadow-md hover:shadow-orange-500/50 transition duration-300 text-sm"
                >
                  Book Free Inspection
                </a>
                <p className="text-xs text-center text-gray-500">
                  *With any repair service
                </p>
              </div>
            </div>
          
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-60px) translateX(15px) rotate(120deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) translateX(30px) rotate(240deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
