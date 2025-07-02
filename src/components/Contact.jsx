import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              Karnika Air Cool
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We’re available 24/7 to assist with all your AC needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100/50 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Reach Out Directly
            </h3>
            <div className="space-y-6 text-gray-700 text-base">
              <div className="group flex gap-4 items-start">
                <FaMapMarkerAlt className="text-teal-500 text-xl mt-1 group-hover:text-orange-500 transition-colors" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p>
                    Gali No. 16, near Noida Commercial Co-operative Bank,
                    <br />
                    Chajarsi, Sector 63, Noida – 201301, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="group flex gap-4 items-start">
                <FaPhoneAlt className="text-orange-500 text-xl mt-1 group-hover:text-teal-500 transition-colors" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p>+91-9910492803</p>
                </div>
              </div>

              <div className="group flex gap-4 items-start">
                <FaClock className="text-teal-500 text-xl mt-1 group-hover:text-orange-500 transition-colors" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Business Hours
                  </h4>
                  <p>Open 24 Hours</p>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919910492803"
                  className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
                >
                  <FaPhoneAlt className="text-xl group-hover:animate-pulse" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919910492803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
                >
                  <FaWhatsapp className="text-xl group-hover:animate-pulse" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100/50 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value.trim();
                const phone = e.target.phone.value.trim();
                const service = e.target.service.value;
                const message = e.target.message.value.trim();

                const fullMessage = `Hello Karnika Air Cool,%0A%0AMy name is ${name}.%0AI need help with: ${service}.%0A%0AMessage:%0A${message}%0A%0AYou can contact me at: ${phone}.`;

                const whatsappLink = `https://wa.me/919910492803?text=${encodeURI(
                  fullMessage
                )}`;

                window.open(whatsappLink, "_blank");
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="AC Maintenance">AC Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Describe your AC issue or request"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
              >
                <FaRegEnvelope className="inline-block mr-2" />
                Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
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

export default Contact;
