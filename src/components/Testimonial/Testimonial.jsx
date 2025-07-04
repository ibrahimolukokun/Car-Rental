import React from "react";
import { FaStar } from "react-icons/fa";

// Example testimonials – replace with real data or fetch from your CMS
const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    role: "Frequent Traveler",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Booking with DriveNow was effortless and the car was spotless. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "James K.",
    role: "Business Professional",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The flexibility to pick up and drop off 24/7 made my business trip stress‑free.",
    rating: 4,
  },
  {
    id: 3,
    name: "Aisha P.",
    role: "Weekend Explorer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Great prices, friendly service, and a wide range of cars – what more could you ask for?",
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 " aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
    ))}
  </div>
);

/**
 * Testimonial section for the marketing homepage.
 * Uses responsive grid on large screens and stacked layout on mobile.
 */
const Testimonial = () => {
return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container mx-auto">
            {/* Section Header */}
            <div className="space-y-4 pb-12 max-w-2xl mx-auto text-center">
                <h2
                    data-aos="fade-up"
                    className="text-4xl font-semibold sm:text-5xl"
                >
                    What Our Clients Say About Us
                </h2>
                <p 
                data-aos="fade-up" 
                className="text-muted-foreground">
                    1000+ happy drivers have already discovered the easiest way to hit the road.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div
                data-aos="fade-up"
                className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black dark:text-white"
            >
                {testimonials.map(({ id, name, role, avatar, quote, rating }) => (
                    <div
                        key={id}
                        className="text-center space-y-3 sm:space-y-6 p-4 h-full bg-gray-100 dark:bg-white/20 sm:py-12 rounded-lg shadow-lg dark:shadow-none hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 ease-out"
                    >

                        <div className="grid place-items-center">
                            {/* Avatar */}
                            <img
                                src={avatar}
                                alt={name}
                                className="h-12 w-12 rounded-full object-cover border"
                                loading="lazy" />
                        </div>

                        <div className="">
                            <div>
                                <h3 className="font-medium leading-tight">{name}</h3>
                                <p className="text-sm text-muted-foreground">{role}</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between space-y-4 pt-0">
                            <blockquote className="italic text-base leading-relaxed">
                                “{quote}”
                            </blockquote>
                            <div className="flex justify-center">
                                <Stars count={rating} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Testimonial;
