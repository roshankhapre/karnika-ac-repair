import {
  FaSnowflake,
  FaTools,
  FaSyncAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaClock,
  FaWrench,
  FaCubes,
} from "react-icons/fa";
import { GiCoolSpices } from "react-icons/gi";
import acrepair from "../assets/air_conditioner_installation_professional_installation_of_window_split.webp";
import acreinstall from "../assets/air_conditioner_repair_expert_diagnostics_and_repair_for.webp";
import HVAC from "../assets/hvac_maintenance_comprehensive_maintenance_for_heating_and (1).webp";
import indoorquality from "../assets/indoor_quality_advanced_air_purification_and_ventilation_solutions.webp";
import coldRoomInstall from "../assets/cold-room-installation.webp";
import coldRoomRepair from "../assets/cold-room-repair.webp";

const Services = () => {
  const services = [
    {
      title: "Air Conditioner Repair",
      description:
        "Expert diagnostics and repair for all AC brands with a 90-day warranty.",
      icon: <FaTools className="text-2xl" />,
      color: "from-teal-500 to-orange-500",
      image: acrepair,
      features: ["All brands serviced", "Same-day repairs", "90-day warranty"],
    },
    {
      title: "Air Conditioner Installation",
      description:
        "Professional installation of window, split, and central AC units with free consultation.",
      icon: <FaSnowflake className="text-2xl" />,
      color: "from-orange-500 to-teal-500",
      image: acreinstall,
      features: [
        "Free load calculation",
        "Energy-efficient units",
        "Clean installation",
      ],
    },
    {
      title: "HVAC Maintenance",
      description:
        "Comprehensive maintenance for heating and cooling systems to ensure peak performance.",
      icon: <FaSyncAlt className="text-2xl" />,
      color: "from-teal-500 to-blue-500",
      image: HVAC,
      features: [
        "Bi-annual checkups",
        "Performance optimization",
        "Extended system life",
      ],
    },
    {
      title: "Indoor Quality",
      description:
        "Advanced air purification and ventilation solutions for healthier indoor environments.",
      icon: <GiCoolSpices className="text-2xl" />,
      color: "from-orange-500 to-green-500",
      image: indoorquality,
      features: ["Allergy reduction", "Odor elimination", "Virus protection"],
    },
    {
      title: "Cold Room Installation",
      description:
        "Expert cold room setup tailored to your business needs with temperature precision.",
      icon: <FaCubes className="text-2xl" />,
      color: "from-indigo-500 to-cyan-500",
      image: coldRoomInstall,
      features: [
        "Energy-efficient design",
        "Custom dimensions",
        "Temperature control",
      ],
    },
    {
      title: "Cold Room Repairing",
      description:
        "Quick diagnostics and repair to minimize downtime and protect your inventory.",
      icon: <FaWrench className="text-2xl" />,
      color: "from-cyan-500 to-indigo-500",
      image: coldRoomRepair,
      features: [
        "Fast fault detection",
        "Certified technicians",
        "24/7 emergency support",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1 left-2 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
          <span className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
            OUR EXPERT SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Tailored{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              Cooling & Heating
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Premium solutions designed for your comfort and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 h-full p-6 flex flex-col">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg mb-4 shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}

                <div
                  className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-md`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className={`mt-1 mr-2 w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`}
                      ></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-white p-8 rounded-2xl shadow-xl border border-teal-100/50">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Stay Comfortable Year-Round
              </h3>
              <p className="text-gray-600">
                Book now and enjoy 10% off your first service with us!
              </p>
            </div>
            <a
              href="tel:+919910492803"
              className="flex-shrink-0 flex items-center gap-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-[1.02] duration-300"
            >
              <FaPhoneAlt className="animate-pulse" />
              Call Now: +91-9910492803
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-teal-100">
              <FaShieldAlt className="text-xl text-teal-500" />
              <span className="font-medium text-gray-700">
                1-Year Warranty
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-teal-100">
              <GiCoolSpices className="text-xl text-orange-500" />
              <span className="font-medium text-gray-700">
                15+ Years Experience
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-teal-100">
              <FaClock className="text-xl text-amber-500" />
              <span className="font-medium text-gray-700">
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
