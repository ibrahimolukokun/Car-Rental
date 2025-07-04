import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const footerCols = [
    {
      title: "Rental",
      links: ["How it works", "Vehicle Fleet", "Pricing"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Insurance", "Cancellation"],
    },
    {
      title: "Contact",
      links: ["support@carental.com", "+44 1234 567 890"],
    },
  ];

  return (
    <div className="dark:bg-black text-dark dark:text-gray-100 pt-16 pb-10">
      <div className="container ">
        {/* Top grid */}
        <div className=" grid gap-10">
          {/* Logo & tagline */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className='logo'>
                  <h1 
                  data-aos='fade-up'
                  className='text-3xl font-bold'>Car Rental</h1>
            </div>
            <p 
            data-aos='fade-up'
            className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
              Car Rental makes hitting the road effortless—transparent pricing, flexible bookings, and
              a fleet that fits every journey.
            </p>
          </div>

          {/* Columns */}
          <div 
          data-aos='fade-up'
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
            {footerCols.map(({ title, links }) => (
              <div key={title}>
                <h4 className="font-semibold text-primary dark:text-gray-100 mb-4">{title}</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {links.map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-primary dark:hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Car Rental. All rights reserved.
          </span>

          {/* Newsletter form (no backend yet) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: hook into your newsletter API / Email service
            }}
            className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden px-2 py-1 w-full md:w-auto max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 w-full bg-transparent text-dark dark:text-gray-100 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition"
              aria-label="Send"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
