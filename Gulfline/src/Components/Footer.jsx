import { MapPin, Phone, Clock } from "lucide-react";

const Footers = () => {
  const services = [
    "Towing",
    "Jump Start",
    "Tire Change",
    "Lockout Service",
    "Fuel & Gas Delivery",
    "Winch Out Services",
  ];

  const companyLinks = ["About Us", "Reviews", "FAQ", "Contact"];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 - Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col gap-[3px]">
                <div className="h-[3px] w-6 bg-red-500 rounded-full" />
                <div className="h-[3px] w-4 bg-red-500 rounded-full" />
                <div className="h-[3px] w-5 bg-red-500 rounded-full" />
              </div>
              <div>
                <div
                  className="text-lg font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Gulfline <span className="text-red-500">Towing</span>
                </div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Service Miami
                </div>
              </div>
            </div>

            <p
              className="text-gray-400 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Trust us for all your towing needs. Reliable, efficient, and
              professional service you can count on. Contact us today for a
              stress-free experience.
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <Phone size={14} className="text-red-500 flex-shrink-0" />
              <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                (774) 231-0999
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="text-red-500 flex-shrink-0" />
              <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                Miami, Florida
              </span>
            </div>
          </div>

          {/* Col 2 - Opening Hours */}
          <div>
            <h4
              className="text-white font-black text-base uppercase tracking-widest mb-5 border-b border-gray-700 pb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Opening Hours
            </h4>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <Clock size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                We're open <span className="text-white font-bold">24 hours per day</span>,{" "}
                <span className="text-white font-bold">7 days a week</span> — including holidays.
              </p>
            </div>
          </div>

          {/* Col 3 - Company Info */}
          <div>
            <h4
              className="text-white font-black text-base uppercase tracking-widest mb-5 border-b border-gray-700 pb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Company Info
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-red-500 transition-colors duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Services */}
          <div>
            <h4
              className="text-white font-black text-base uppercase tracking-widest mb-5 border-b border-gray-700 pb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-red-500 transition-colors duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>
            © Copyright Gulfline Towing {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-red-500 transition-colors duration-200" style={{ fontFamily: "'Poppins', sans-serif" }}>Sitemap</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-200" style={{ fontFamily: "'Poppins', sans-serif" }}>Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-200" style={{ fontFamily: "'Poppins', sans-serif" }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;