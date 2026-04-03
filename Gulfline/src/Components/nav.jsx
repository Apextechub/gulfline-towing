import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About Us", "What We Do", "Contact Us"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              {/* Icon anchor/wave */}
              <div className="flex flex-col gap-[3px]">
                <div className="h-[3px] w-6 bg-red-600 rounded-full" />
                <div className="h-[3px] w-4 bg-red-600 rounded-full" />
                <div className="h-[3px] w-5 bg-red-600 rounded-full" />
              </div>
              <div className="leading-tight">
                <div className="text-2xl font-black uppercase tracking-tight text-gray-900">
                  Gulfline <span className="text-red-600">Towing</span>
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Service Miami
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="tel:7742310999"
              className="ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-wider px-5 py-3 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              CALL +1 (863) 456 7910

            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={26} strokeWidth={2.5} className="text-black" />
            ) : (
              <Menu size={26} strokeWidth={2.5} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 pt-3 pb-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 transition-colors duration-150"
            >
              {link}
            </a>
          ))}
          <a
            href="tel:7742310999"
            className="mt-3 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-wider text-center px-5 py-4 transition-colors duration-200"
          >
            CALL +1 (863) 456 7910

          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;