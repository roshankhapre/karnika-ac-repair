import {
  FaBolt,
  FaRupeeSign,
  FaHome,
  FaUserShield,
  FaShieldAlt,
  FaTools,
  FaClock,
  FaSmile,
} from "react-icons/fa";
import { GiTechnoHeart, GiCoolSpices } from "react-icons/gi";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Lightning Fast Response",
      description:
        "90% of service calls responded within 2 hours - we know you can't wait in the heat.",
      icon: <FaBolt className="text-3xl" />,
      color: "from-teal-500 to-orange-500",
    },
    {
      title: "No Hidden Costs",
      description:
        "Upfront pricing with 100% transparency. Pay only for what you need.",
      icon: <FaRupeeSign className="text-3xl" />,
      color: "from-orange-500 to-teal-500",
    },
    {
      title: "Complete Home Service",
      description:
        "Fully equipped mobile units arrive ready to fix any AC issue on the spot.",
      icon: <FaHome className="text-3xl" />,
      color: "from-teal-500 to-blue-500",
    },
    {
      title: "Certified Experts",
      description: "Manufacturer-trained technicians for all major AC brands.",
      icon: <FaUserShield className="text-3xl" />,
      color: "from-orange-500 to-indigo-500",
    },
    {
      title: "Premium Parts",
      description:
        "We use only OEM or higher-grade components for lasting repairs.",
      icon: <FaTools className="text-3xl" />,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "24/7 Availability",
      description:
        "Emergency services available round the clock, 365 days a year.",
      icon: <FaClock className="text-3xl" />,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "If you're not happy, we'll make it right - no questions asked.",
      icon: <FaSmile className="text-3xl" />,
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Extended Warranty",
      description:
        "All repairs come with our industry-leading 2-year warranty.",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "from-orange-500 to-blue-500",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
      id="why-choose-us"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full text-white text-sm font-semibold shadow-lg">
            <GiTechnoHeart className="text-lg" />
            WHY WE STAND OUT
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              Karnika AC
            </span>{" "}
            Advantage
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover why thousands trust us for their cooling and heating needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Gradient Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 h-full bg-white p-6 flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-md`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-teal-100">
            <GiCoolSpices className="text-2xl text-teal-500" />
            <span className="font-medium text-gray-700">
              15+ Years Experience
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-teal-100">
            <FaShieldAlt className="text-2xl text-orange-500" />
            <span className="font-medium text-gray-700">2-Year Warranty</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-teal-100">
            <FaUserShield className="text-2xl text-teal-500" />
            <span className="font-medium text-gray-700">
              Certified Technicians
            </span>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
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

export default WhyChooseUs;
