import {
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaGoogle,
  FaWhatsapp,
} from "react-icons/fa";
import { GiCoolSpices } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Best AC service in Noida! My Split AC was leaking — their team came within 1 hour. Problem solved professionally.",
    author: "Rahul Mehra",
    role: "Resident, Sector 62 Noida",
    rating: 5,
    date: "2 days ago",
  },
  {
    quote:
      "Very polite staff. I booked via WhatsApp, and their technician was on time. Cleaned our 2 window ACs perfectly.",
    author: "Shalini Patel",
    role: "Teacher, Indirapuram",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "I've used multiple AC services, but Karnika is the most transparent and affordable. Highly recommend!",
    author: "Amit Yadav",
    role: "Freelancer, Vasundhara",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "Got AC installation done. Clean work and gas tested well. 5-star service experience.",
    author: "Priya Soni",
    role: "Interior Designer, Noida Extension",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote:
      "Karnika team came on Sunday and fixed my AC gas issue. Very happy with their emergency support.",
    author: "Vivek Sharma",
    role: "Manager, Ghaziabad",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote:
      "Excellent deep cleaning service for my AC. Now cooling like new with much less power consumption.",
    author: "Rohit Verma",
    role: "Business Owner, Noida",
    rating: 5,
    date: "3 days ago",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
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
            <FaGoogle className="text-lg" />
            <span>TRUSTED BY 1000+ CUSTOMERS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">
              Customer Stories
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hear from our satisfied clients across Noida and Ghaziabad.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative group bg-white border border-teal-100/50 rounded-2xl shadow-lg p-8 flex flex-col justify-between h-full min-h-[300px] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-teal-500/20 group-hover:text-orange-500/20 transition-colors">
                  <FaQuoteLeft className="text-5xl" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    {testimonial.date}
                  </span>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6 italic relative z-10">
                  “{testimonial.quote}”
                </p>

                <div className="pt-4 border-t border-teal-100 relative z-10">
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-lg border border-teal-100/50 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                <GiCoolSpices className="text-3xl" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ready to Experience Our Service?
                </h3>
                <p className="text-gray-600">
                  Join thousands of satisfied customers today.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919910492803"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
              >
                <FaPhoneAlt className="text-xl group-hover:animate-pulse" />
                Call Now: +91-9910492803
              </a>
              <a
                href={`https://wa.me/919910492803?text=${encodeURIComponent(
                  "Hi Karnika Air Cool Team,\n\nI just went through your customer reviews and I'm impressed! I’d like to book a service or get more details about your AC repair and installation. Please let me know the next available slot.\n\nThanks!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl group-hover:animate-pulse" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Pagination Style */}
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
        .swiper-pagination-bullet {
          background-color: #14b8a6;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background-color: #f97316;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
