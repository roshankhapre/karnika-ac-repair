import { FaUsers, FaTools, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { GiCoolSpices } from "react-icons/gi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: (
      <FaUsers className="text-3xl text-teal-500 group-hover:text-orange-500 transition-colors" />
    ),
    title: "Happy Clients",
    value: 500,
    suffix: "+",
  },
  {
    icon: (
      <FaTools className="text-3xl text-orange-500 group-hover:text-teal-500 transition-colors" />
    ),
    title: "AC Installations",
    value: 250,
    suffix: "+",
  },
  {
    icon: (
      <FaCheckCircle className="text-3xl text-teal-500 group-hover:text-orange-500 transition-colors" />
    ),
    title: "Repairs Completed",
    value: 800,
    suffix: "+",
  },
];

const TrustFactors = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Count only once when section comes into view
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <section
      id="trust-factors"
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
      ref={ref}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
            <GiCoolSpices className="text-lg" />
            <span>TRUSTED BY THOUSANDS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Why Customers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              Trust Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Proven results and exceptional service across Noida & Ghaziabad.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-teal-100/50"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-extrabold text-gray-800">
                  {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                  {stat.suffix}
                </h3>
                <p className="text-lg text-gray-600 mt-2 font-medium">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="tel:+919910498203"
            className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
          >
            <FaPhoneAlt className="text-xl group-hover:animate-pulse" />
            Book Your Service Now
          </a>
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
    </section>
  );
};

export default TrustFactors;
