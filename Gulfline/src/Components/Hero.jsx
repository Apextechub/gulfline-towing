import { Phone } from "lucide-react";
import heroBg from "/assets/hero.png";

const poppins = document.createElement("link");
poppins.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap";
poppins.rel = "stylesheet";
document.head.appendChild(poppins);

const HeroSect = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Red overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 red-900/80 to-black/80" />

      {/* Diagonal red accent bar */}
      {/* <div className="absolute top-0 left-0 w-1 h-full bg-red-600" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="flex items-center gap-2 bg-red-600 text-white text-xs font-black uppercase tracking-[0.25em] px-4 py-2 mb-8 animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full inline-block" />
          Available 24/7 — Miami, FL
        </div>

        {/* Hero Headline */}
        <h1 className="text-white font-black uppercase leading-none tracking-tight mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Gulfline
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-500">
            Towing
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Service Miami
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-16 bg-red-600" />
          <div className="w-2 h-2 bg-red-600 rotate-45" />
          <div className="h-[2px] w-16 bg-red-600" />
        </div>

        {/* Subheadline */}
        <p className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-wide">
          The #1 Tow Truck Service in Miami
        </p>

        {/* CTA Button */}
        <a
          href="tel:7742310999"
          className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-lg px-10 py-5 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
        >
          <Phone size={20} className="group-hover:animate-bounce" />
          CALL (774) 231-0999
        </a>

        {/* Trust badge row */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-400 text-xs font-semibold uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <span className="text-red-500">✓</span> Fast Response
          </span>
          <span className="flex items-center gap-1">
            <span className="text-red-500">✓</span> Licensed & Insured
          </span>
          <span className="flex items-center gap-1">
            <span className="text-red-500">✓</span> 24/7 Availability
          </span>
          <span className="flex items-center gap-1">
            <span className="text-red-500">✓</span> Flat Rate Pricing
          </span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24  from-black/60 to-transparent" />
    </section>
  );
};

export default HeroSect;