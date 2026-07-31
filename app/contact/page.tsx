"use client";

import { useState } from "react";

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzFsUylU2-pyEuD3Mk8ujFZheS2CD0j0NB-tCkdAehFXK4z_rmU7xUW-NHBoa8RpFrz/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-32 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Editorial Typography */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6 block font-medium">
            Booking & Inquiries
          </span>
          <h1 className="text-4xl md:text-7xl font-extralight tracking-tight text-white mb-8 leading-tight">
            Let's discuss <br />
            <span className="font-serif italic text-neutral-400">
              your vision.
            </span>
          </h1>
          <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-md mb-12">
            Please fill out the form with your event details. We aim to respond
            to all inquiries within 24 hours. For urgent requests, reach out
            directly via email.
          </p>

          <div className="flex flex-col gap-4 text-xs font-light text-neutral-500 tracking-widest uppercase">
            <p>
              Phone:{" "}
              <a
                href="tel:+8801712345678"
                className="text-white hover:text-neutral-300 transition-colors"
              >
                +880 1795 771000
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@sium.com"
                className="text-white hover:text-neutral-300 transition-colors"
              >
                saddadsium.official@gmail.com
              </a>
            </p>
            <p>
              Based in: <span className="text-white">Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>

        <div className="bg-neutral-900/50 p-8 md:p-12 border border-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="relative group">
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Full Name"
              />
              <label className="absolute left-0 top-3 text-neutral-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-white cursor-text">
                Full Name
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Email Address"
                />
                <label className="absolute left-0 top-3 text-neutral-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-white">
                  Email Address
                </label>
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Phone Number"
                />
                <label className="absolute left-0 top-3 text-neutral-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-white">
                  Phone Number
                </label>
              </div>
            </div>

            {/* Package & Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <select
                  name="package"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-black bg-white">
                    Select a Package
                  </option>

                  {/* Single Event Packages */}
                  <optgroup
                    label="Signature Tiers"
                    className="text-black bg-white font-semibold"
                  >
                    <option value="Akhd / Engagement" className="font-light">
                      Akhd / Engagement (6,000 BDT)
                    </option>
                    <option value="Pre/Post-Wedding" className="font-light">
                      Pre/Post-Wedding (13,000 BDT)
                    </option>
                    <option
                      value="Classic Holud / Mehendi"
                      className="font-light"
                    >
                      Classic Holud / Mehendi (15,000 BDT)
                    </option>
                    <option value="Premium Wedding" className="font-light">
                      Premium Wedding (20,000 BDT)
                    </option>
                    <option value="Grand Reception" className="font-light">
                      Grand Reception (25,000 BDT)
                    </option>
                    <option value="Maternity & Baby" className="font-light">
                      Maternity & Baby (7,000 BDT)
                    </option>
                    <option value="Milestone Events" className="font-light">
                      Milestone Events (14,000 BDT)
                    </option>
                    <option value="Corporate & Brand" className="font-light">
                      Grand Celebrations (46,000 BDT)
                    </option>
                  </optgroup>

                  {/* Multi-Day Combos */}
                  <optgroup
                    label="Multi-Day Collections"
                    className="text-black bg-white font-semibold"
                  >
                    <option
                      value="Combo: The Essential Duo"
                      className="font-light"
                    >
                      The Essential Duo (27,000 BDT)
                    </option>
                    <option
                      value="Combo: The Classic Duo"
                      className="font-light"
                    >
                      The Classic Duo (45,000 BDT)
                    </option>
                    <option
                      value="Combo: The Vibrant Trilogy"
                      className="font-light"
                    >
                      The Vibrant Trilogy (47,000 BDT)
                    </option>
                    <option
                      value="Combo: The Grand Trilogy"
                      className="font-light"
                    >
                      The Grand Trilogy (65,000 BDT)
                    </option>
                    <option
                      value="Combo: The Complete Saga"
                      className="font-light"
                    >
                      The Complete Saga (85,000 BDT)
                    </option>
                    <option
                      value="Combo: The Royal Signature"
                      className="font-light"
                    >
                      The Royal Signature (1,35,000 BDT)
                    </option>
                  </optgroup>

                  {/* Custom Option */}
                  <option
                    value="Custom/Bespoke"
                    className="text-black bg-white font-semibold mt-2"
                  >
                    Custom / Bespoke Quote
                  </option>
                </select>
                <label className="absolute left-0 -top-4 text-white text-[9px] uppercase tracking-widest">
                  Interested In
                </label>
              </div>

              <div className="relative group">
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-white transition-colors"
                  style={{ colorScheme: "dark" }}
                />
                <label className="absolute left-0 -top-4 text-white text-[9px] uppercase tracking-widest">
                  Event Date
                </label>
              </div>
            </div>

            {/* Message Area */}
            <div className="relative group">
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                placeholder="Tell us about your event..."
              ></textarea>
              <label className="absolute left-0 top-3 text-neutral-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-white">
                Project Details
              </label>
            </div>

            {/* Submit Button & Status */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-neutral-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Request..." : "Submit Inquiry"}
              </button>

              {isSuccess && (
                <p className="text-center text-green-400 text-xs font-light mt-6 tracking-widest uppercase">
                  Inquiry sent successfully. We will be in touch.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
