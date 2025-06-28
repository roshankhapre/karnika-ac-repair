import {
  FaTools,
  FaShieldAlt,
  FaClock,
  FaAward,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { GiTechnoHeart, GiCoolSpices } from "react-icons/gi";
import aboutImage from "../assets/ac-service.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-800 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-80 bg-blue-900 rounded-full filter blur-3xl animate-float delay-1000" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Image with Badge */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-3xl opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-teal-100/40">
              <img
                src={aboutImage}
                alt="Karnika AC Services"
                className="w-full h-full object-cover min-h-[300px] max-h-[600px] rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900/80 to-transparent p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <GiTechnoHeart className="text-3xl text-orange-300" />
                  <div>
                    <h3 className="text-xl font-bold text-white">15+ Years</h3>
                    <p className="text-sm text-teal-100">Of Trusted Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
              <GiCoolSpices className="text-lg" />
              WHY WE'RE DIFFERENT
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
                AC Solutions
              </span>{" "}
              in Noida
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Karnika AC Services delivers expert cooling & heating care with
              certified professionals, advanced tools, and a commitment to your
              comfort and satisfaction.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <FaTools className="text-xl" />,
                  title: "All Brands Expert",
                  desc: "Certified for every major AC brand.",
                  bg: "bg-teal-100 text-teal-600",
                },
                {
                  icon: <FaShieldAlt className="text-xl" />,
                  title: "2-Year Warranty",
                  desc: "Longest warranty in the industry.",
                  bg: "bg-orange-100 text-orange-600",
                },
                {
                  icon: <FaClock className="text-xl" />,
                  title: "24/7 Emergency",
                  desc: "Available anytime, any season.",
                  bg: "bg-teal-100 text-teal-600",
                },
                {
                  icon: <FaAward className="text-xl" />,
                  title: "Certified Pros",
                  desc: "Manufacturer-trained experts.",
                  bg: "bg-orange-100 text-orange-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md border border-teal-100/50 hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg shadow-sm ${item.bg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit">
              <a
                href="tel:+919910498203"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
              >
                <FaPhoneAlt className="text-xl group-hover:animate-pulse" />
                Call Now: +91-9910492803
              </a>

              <a
                href="https://wa.me/919910492803?text=Hello%20Karnika%20AC%20Services%2C%20I%E2%80%99m%20interested%20in%20your%20AC%20repair%2Fservice.%20Could%20you%20please%20help%20me%20with%20the%20best%20solution%20for%20my%20cooling%20needs%3F%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl group-hover:animate-pulse" />
                Message on WhatsApp
              </a>
            </div>

            {/* Optional Trust Note */}
            <p className="mt-4 text-sm text-gray-500">
              💬 Our support team usually responds within{" "}
              <span className="font-semibold text-teal-600">5 minutes</span>{" "}
              during working hours.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Float Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;
