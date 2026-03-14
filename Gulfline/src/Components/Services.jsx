
import towImg from "/assets/car-towed.webp";
import jumpstartImg from "/assets/Jump-start.jpg";
import tireImg from "/assets/tires-changing.jpg";

import lockoutImg from "/assets/Lock-out-Service.jpg";
import fuelImg from "/assets/fuel-delivery.jpg";
import winchoutImg from "/assets/winching.jpg";

const services = [
  {
    title: "Towing",
    description:
      "Need a tow? Our fast and reliable towing service gets your vehicle safely off the road and to your destination of choice — any time of day or night.",
    image: towImg, 
  },
  {
    title: "Jump Start",
    description:
      "Dead battery? We'll get you back on the road fast with our professional jump start service. Available 24/7 across Miami for quick, safe battery assistance.",
    image: jumpstartImg, 
  },
  {
    title: "Tire Change",
    description:
      "Got a flat? Our team will come to you and swap your tire quickly and safely so you can get back on the road without the hassle.",
    image: tireImg, 
  },
  {
    title: "Lockout Service",
    description:
      "Locked your keys inside? Don't stress. Our lockout specialists will get you back into your vehicle safely and without damage — fast.",
    image: lockoutImg, 
  },
  {
    title: "Fuel & Gas Delivery",
    description:
      "Run out of gas on the road? We'll deliver fuel directly to your location so you can keep moving without waiting for a tow.",
    image: fuelImg, 
  },
  {
    title: "Winch Out Services",
    description:
      "Stuck in mud, a ditch, or off-road? Our winch out service will safely pull your vehicle free and get you back on solid ground.",
    image: winchoutImg, 
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        
        <div className="text-center mb-14">
          <p
            className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Services
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-[2px] w-12 bg-red-600" />
            <div className="w-2 h-2 bg-red-600 rotate-45" />
            <div className="h-[2px] w-12 bg-red-600" />
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-red-300 transition-all duration-300 group flex flex-col"
            >
              
              <div className="w-full h-52 overflow-hidden bg-gray-200 relative">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Add Image
                    </span>
                  </div>
                )}
                {/* Red top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                <h2
                  className="text-2xl font-black text-gray-900 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.title}
                </h2>
                <p
                  className="font-black text-m leading-relaxed flex-1"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {service.description}
                </p>

                
                <a
                  href="#"
                  className="mt-6 block text-center bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;