import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your own form‑handling logic (EmailJS, API route, etc.)
  };

  return (
    <section className="dark:bg-black dark:text-white py-14 sm:py-24">
      <div className="container mx-auto">
        <div 
        data-aos="zoom-in"
        className="grid sm:grid-cols-3 gap-10 bg-dark backdrop-blur rounded-2xl p-8 sm:p-12">
          {/* Contact details */}
          <div className="sm:col-span-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              Let’s collaborate on your next car&nbsp;rental
            </h2>
            <p className="text-gray-300 max-w-prose">
              Have questions about fleet availability, corporate discounts, or long‑term leasing?
              Drop us a line—our team usually replies within the hour during business hours
              (08:00 – 20:00&nbsp;BST).
            </p>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 text-primary" />
                <a href="mailto:contact@drivenow.com" className="hover:underline">
                  contact@carental.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="h-5 w-5 text-primary" />
                <a href="tel:+441234567890" className="hover:underline">
                  +44&nbsp;1234&nbsp;567&nbsp;890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                <span>221B Baker Street, London&nbsp;NW1&nbsp;6XE</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="sm:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-transparent placeholder:text-gray-500 p-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-transparent placeholder:text-gray-500 p-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                placeholder="Tell us what you need…"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-transparent placeholder:text-gray-500 p-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full gap-2 rounded-md
                           bg-indigo-600 py-3 font-semibold text-white transition
                           hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Send&nbsp;Message <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
