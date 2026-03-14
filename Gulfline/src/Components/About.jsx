import { CheckCircle } from "lucide-react";

const features = [
  "Available 24/7 for all your towing needs.",
  "Fast response times for emergency towing situations.",
  "Experienced professionals ensuring safe and secure towing.",
  "Competitive pricing without sacrificing quality in service.",
];

const AboutUs = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Top label */}
        <p
          className="text-red-600 font-bold text-sm uppercase tracking-widest mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Fast, Affordable, and Professional Services Available 24/7
        </p>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Your Reliable Towing Solution <br className="hidden sm:block" />
          in Miami
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-red-600" />
          <div className="w-2 h-2 bg-red-600 rotate-45" />
          <div className="h-[2px] w-12 bg-red-600" />
        </div>

        {/* Subtext */}
        <p
          className="text-gray-500 text-base sm:text-lg max-w-2xl mb-14 leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          We prioritize customer satisfaction, efficiency, and affordability to
          provide stress-free towing services whenever you need them.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border border-gray-200 rounded-2xl px-6 py-5 text-left hover:border-red-400 hover:shadow-md transition-all duration-200 group"
            >
              <CheckCircle
                size={24}
                className="text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
              />
              <p
                className="text-gray-700 font-semibold text-base leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;