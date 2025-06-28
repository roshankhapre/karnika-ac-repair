import { FaRegCalendarCheck, FaTools, FaTruck } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const steps = [
  {
    icon: (
      <FaRegCalendarCheck className="text-3xl text-teal-500 group-hover:text-orange-500 transition-colors" />
    ),
    title: "Request a Free Consultation",
    description: "Tell us your AC needs—absolutely no obligation!",
    aos: "fade-up-right",
  },
  {
    icon: (
      <FaTools className="text-3xl text-orange-500 group-hover:text-teal-500 transition-colors" />
    ),
    title: "Get Recommendations & Estimate",
    description: "We provide customized AC service options and fair pricing.",
    aos: "zoom-in",
  },
  {
    icon: (
      <FaTruck className="text-3xl text-teal-500 group-hover:text-orange-500 transition-colors" />
    ),
    title: "We Deliver & Install",
    description:
      "Our experts will install, repair, or maintain your AC quickly & professionally.",
    aos: "fade-up-left",
  },
];

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="process"
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
          <span className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
            OUR SIMPLE PROCESS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Hassle-Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              AC Service Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Three easy steps to cool comfort and exceptional service.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-orange-500" />

          <div className="flex flex-col gap-12 md:gap-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative z-10 flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                data-aos={step.aos}
              >
                {/* Content Card */}
                <div className="md:w-1/2 p-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100/50 hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">{step.icon}</div>
                      <span className="text-teal-500 font-bold text-lg group-hover:text-orange-500 transition-colors">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg text-white text-xl font-bold transform group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center" data-aos="zoom-in">
          <a
            href="tel:+919910492803"
            className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
          >
            <FaRegCalendarCheck className="text-xl group-hover:animate-pulse" />
            Book Your Consultation Now
          </a>
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

export default Process;
