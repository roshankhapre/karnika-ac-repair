import {
  FaTools,
  FaRupeeSign,
  FaCalendarAlt,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiCoolSpices } from "react-icons/gi";

const services = [
  {
    name: "Window AC Service",
    price: "₹449",
    type: "Regular cleaning & checkup",
    popular: false,
    features: [
      "Coil cleaning",
      "Filter wash",
      "Cooling check",
      "1-month warranty",
    ],
  },
  {
    name: "Split AC Service",
    price: "₹499",
    type: "Basic maintenance service",
    popular: false,
    features: [
      "Indoor unit cleaning",
      "Drain pipe check",
      "Remote testing",
      "1-month warranty",
    ],
  },
  {
    name: "Premium Deep Cleaning",
    price: "₹899",
    type: "High pressure jet + foam",
    popular: true,
    features: [
      "Complete disassembly",
      "Pressure wash",
      "Foam cleaning",
      "3-month warranty",
    ],
  },
  {
    name: "Window AC Gas Refill",
    price: "₹3000",
    type: "Includes gas & labor",
    popular: false,
    features: [
      "R22/R32 gas",
      "Leak testing",
      "Pressure check",
      "3-month warranty",
    ],
  },
  {
    name: "Split AC Gas Refill",
    price: "₹3500",
    type: "Compressor top-up included",
    popular: false,
    features: [
      "R22/R32 gas",
      "Vacuum pump",
      "Full diagnostics",
      "3-month warranty",
    ],
  },
  {
    name: "AC Installation",
    price: "₹1800",
    type: "Professional setup",
    popular: false,
    features: [
      "Wall mounting",
      "Piping setup",
      "Electrical check",
      "Installation warranty",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
            <GiCoolSpices className="text-lg" />
            TRANSPARENT PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Affordable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              AC Service Rates
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Quality service at honest prices with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                service.popular
                  ? "border-2 border-orange-400"
                  : "border border-teal-100/50"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  MOST POPULAR
                </div>
              )}

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  service.popular
                    ? "from-orange-500 to-orange-600"
                    : "from-teal-500 to-orange-500"
                } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative p-6">
                {/* Service Name and Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      service.popular
                        ? "bg-orange-100 text-orange-600"
                        : "bg-teal-100 text-teal-600"
                    } group-hover:bg-orange-200 group-hover:text-orange-700 transition-colors`}
                  >
                    <FaTools className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-1">
                    <FaRupeeSign
                      className={`${
                        service.popular ? "text-orange-600" : "text-teal-600"
                      } group-hover:text-orange-700`}
                    />
                    <span className="text-4xl font-extrabold text-gray-900">
                      {service.price.replace("₹", "")}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{service.type}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className={`mt-1 mr-2 w-2 h-2 rounded-full ${
                          service.popular ? "bg-orange-400" : "bg-teal-500"
                        } group-hover:bg-orange-500`}
                      ></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="tel:+919910492803"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    service.popular
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-orange-500/50"
                      : "bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white shadow-lg hover:shadow-teal-500/50"
                  }`}
                >
                  Book This Service
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Contact us for tailored AC services at competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919910492803"
              className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-teal-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
            >
              <FaPhoneAlt className="text-xl group-hover:animate-pulse" />
              Call for Quote
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

export default Pricing;
