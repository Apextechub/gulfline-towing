import { useState } from "react";
import { User, Phone, MapPin, MessageSquare, ChevronDown } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.trim().length < 2)
      newErrors.name = "Please enter your full name";

    if (!form.phone || form.phone.trim().length < 7)
      newErrors.phone = "Enter a valid phone number";
    else if (!/^[0-9+()\- ]+$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number";

    if (!form.service)
      newErrors.service = "Please select a service";

    if (!form.location || form.location.trim().length < 2)
      newErrors.location = "Please enter your location";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://mail-server-towing-pages.vercel.app/api/send-quote",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Contact Us Now
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Get a Free Quote
          </h2>
          <p className="text-gray-500 text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
            We are ready to help you with your needs
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-[2px] w-12 bg-red-600" />
            <div className="w-2 h-2 bg-red-600 rotate-45" />
            <div className="h-[2px] w-12 bg-red-600" />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10">

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="bg-red-600 rounded-full p-4 w-14 h-14 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-black text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Quote Request Sent!
              </h3>
              <p className="text-gray-500 text-sm max-w-xs" style={{ fontFamily: "sans-serif" }}>
                Thanks, {form.name}! We'll be in touch shortly. For urgent help, call us directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: "sans-serif" }}>
                    Name
                  </label>
                  <div className={`flex items-center border rounded-xl px-4 py-3 gap-3 focus-within:ring-1 transition-all duration-200 bg-gray-50 ${
                    errors.name ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-400" : "border-gray-200 focus-within:border-red-500 focus-within:ring-red-400"
                  }`}>
                    <User size={16} className="text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="bg-transparent w-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                      style={{ fontFamily: "sans-serif" }}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Phone Number
                  </label>
                  <div className={`flex items-center border rounded-xl px-4 py-3 gap-3 focus-within:ring-1 transition-all duration-200 bg-gray-50 ${
                    errors.phone ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-400" : "border-gray-200 focus-within:border-red-500 focus-within:ring-red-400"
                  }`}>
                    <Phone size={16} className="text-gray-400 flex-shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g (000) 000-0000"
                      className="bg-transparent w-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                      style={{ fontFamily: "sans-serif" }}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Service */}
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Service Needed
                </label>
                <div className={`flex items-center border rounded-xl px-4 py-3 gap-3 focus-within:ring-1 transition-all duration-200 bg-gray-50 ${
                  errors.service ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-400" : "border-gray-200 focus-within:border-red-500 focus-within:ring-red-400"
                }`}>
                  <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-transparent w-full text-sm text-gray-800 focus:outline-none appearance-none"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    <option value="">Select Service Needed</option>
                    <option>Emergency Towing</option>
                    <option>Light Duty Towing</option>
                    <option>Heavy Duty Towing</option>
                    <option>Jump Start</option>
                    <option>Tire Change</option>
                    <option>Lockout Service</option>
                    <option>Fuel / Gas Delivery</option>
                    <option>Winch-Out Service</option>
                    <option>Long Distance Towing</option>
                  </select>
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Location */}
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Your Location
                </label>
                <div className={`flex items-center border rounded-xl px-4 py-3 gap-3 focus-within:ring-1 transition-all duration-200 bg-gray-50 ${
                  errors.location ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-400" : "border-gray-200 focus-within:border-red-500 focus-within:ring-red-400"
                }`}>
                  <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Your current location"
                    className="bg-transparent w-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                    style={{ fontFamily: "sans-serif" }}
                  />
                </div>
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>

              {/* Details */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: "sans-serif" }}>
                  Additional Details <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="border border-gray-200 rounded-xl focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-400 transition-all duration-200 bg-gray-50">
                  <div className="flex items-start px-4 pt-3 gap-3">
                    <MessageSquare size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Tell us more about what you need..."
                      maxLength={500}
                      rows={6}
                      className="bg-transparent w-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
                      style={{ fontFamily: "sans-serif" }}
                    />
                  </div>
                  <div className="text-right px-4 pb-2">
                    <span className="text-xs text-gray-400" style={{ fontFamily: "sans-serif" }}>
                      {form.details.length} / 500
                    </span>
                  </div>
                </div>
              </div>

              {serverError && (
                <p className="text-red-500 text-sm font-bold text-center mb-4">{serverError}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest text-base py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;