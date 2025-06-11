"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const reviews = [
    {
      quote:
        "I was nervous about my procedure, but the team at coburg Clinic explained everything clearly and made sure I was comfortable every step of the way. I highly recommend them!",
      author: "Robert Johnson",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "The level of professionalism and compassion I experienced was outstanding. They truly prioritize patient well-being, and I felt like I was in excellent hands.",
      author: "Sarah Williams",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "The care I received was exceptional, and the staff made me feel at ease throughout my treatment.",
      author: "Michael Brown",
      role: "Patient",
      rating: 4,
    },
    {
      quote:
        "From the moment I walked in, I felt welcomed and well cared for. The doctors and nurses were incredibly attentive, and I'm so grateful for their expertise.",
      author: "Emily Davis",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "My doctor offered me a very effective treatment and I really did feel significant improvement really soon. I followed all the prescriptions and now I feel great. Greatly thankful to all the staff, and I would definitely recommend",
      author: "David Wilson",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "Fantastic service and really helpful and caring personnel. I was impressed by pleasant atmosphere and the general assistance. My doctor offered me a very effective treatment and I really did feel significant improvement really soon. I followed all the prescriptions and now I feel great. Greatly thankful to all the staff, and I would definitely recommend this medical center to anyone who medic aid.",
      author: "Jennifer Lee",
      role: "Patient",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [reviews.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);
  };

  // Calculate visible reviews based on activeIndex
  const visibleReviews = reviews.slice(activeIndex * 3, activeIndex * 3 + 3);

  return (
    <section className="py-20 px-4  overflow-hidden rounded-4xl mb-24">
      <h2 className="text-5xl  md:text-[140px] xl:text-[210px] font-semibold md:font-medium w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Testimonials
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Review Cards Container */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {visibleReviews.map((review, index) => (
            <motion.div
              key={`${activeIndex}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#EDEEF1]  p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <FaQuoteLeft className="text-3xl text-[#0E31AC] " />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-8">{review.quote}</p>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900">{review.author}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-4 space-x-2"
        >
          {[...Array(Math.ceil(reviews.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to review set ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
