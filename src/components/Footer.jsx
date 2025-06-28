import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { GiCoolSpices } from "react-icons/gi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-teal-900 to-teal-800 text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GiCoolSpices className="text-3xl text-teal-400" />
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
                  Karnika
                </span>{" "}
                AC Services
              </h3>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed">
              Your trusted cooling experts serving Noida & Delhi NCR with
              premium AC solutions since 2010.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-teal-700 hover:bg-teal-600 text-white p-3 rounded-full transition-all transform hover:scale-110"
              >
                <FaFacebook className="text-lg group-hover:animate-pulse" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-teal-700 hover:bg-orange-600 text-white p-3 rounded-full transition-all transform hover:scale-110"
              >
                <FaInstagram className="text-lg group-hover:animate-pulse" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-teal-700 hover:bg-orange-600 text-white p-3 rounded-full transition-all transform hover:scale-110"
              >
                <FaYoutube className="text-lg group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="group flex items-center gap-2 text-teal-200 hover:text-orange-400 transition"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-teal-400"></span>
                  AC Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="group flex items-center gap-2 text-teal-200 hover:text-orange-400 transition"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-teal-400"></span>
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="group flex items-center gap-2 text-teal-200 hover:text-orange-400 transition"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-teal-400"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="group flex items-center gap-2 text-teal-200 hover:text-orange-400 transition"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-teal-400"></span>
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3">
                <FaPhoneAlt className="text-teal-400 mt-1 group-hover:text-orange-400 transition" />
                <div>
                  <p className="text-teal-100 font-medium">Phone</p>
                  <a
                    href="tel:+919910498203"
                    className="text-teal-200 hover:text-orange-400 transition"
                  >
                    +91 99104 92803
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-3">
                <FaWhatsapp className="text-teal-400 mt-1 group-hover:text-orange-400 transition" />
                <div>
                  <p className="text-teal-100 font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/919910498203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-200 hover:text-orange-400 transition"
                  >
                    Chat Now
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-3">
                <FaEnvelope className="text-teal-400 mt-1 group-hover:text-orange-400 transition" />
                <div>
                  <p className="text-teal-100 font-medium">Email</p>
                  <a
                    href="mailto:karnikaaircoolservice711@gmail.com"
                    className="text-teal-200 hover:text-orange-400 transition"
                  >
                    karnikaaircoolservice711@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3">
                <FaMapMarkerAlt className="text-teal-400 mt-1 group-hover:text-orange-400 transition" />
                <div>
                  <p className="text-teal-100 font-medium">Our Location</p>
                 <p className="text-teal-200">
  Gali No. 16, near Noida Commercial Co-operative Bank,<br />
  Chajarsi, Sector 63, Noida – 201301, Uttar Pradesh
</p>

                </div>
              </li>
              <li className="group flex items-start gap-3">
                <FaClock className="text-teal-400 mt-1 group-hover:text-orange-400 transition" />
                <div>
                  <p className="text-teal-100 font-medium">Working Hours</p>
                  <p className="text-teal-200">24×7 Emergency Service</p>
                  <p className="text-teal-200 text-sm">Regular: 8AM - 9PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl p-6 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Need AC Service Today?
              </h4>
              <p className="text-teal-100 text-sm">
                Call or message us for same-day service in Noida & Ghaziabad.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919910492803"
                className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-teal-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
              >
                <FaPhoneAlt className="text-xl group-hover:animate-pulse" />
                Call Now
              </a>
              <a
                href="https://wa.me/919910492803"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl group-hover:animate-pulse" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-700 pt-8 text-center">
          <p className="text-teal-200 text-sm">
            © {currentYear} Karnika AC Services. All rights reserved.
          </p>
          <p className="text-teal-300 text-xs mt-2">
            Designed with ❤️ by{" "}
            <a
              href="https://www.hiddenleaftechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white transition"
            >
              Hidden Leaf Technologies
            </a>
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
