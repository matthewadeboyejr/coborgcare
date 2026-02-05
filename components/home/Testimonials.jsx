"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const reviews = [
    {
      quote:
        "Always an excellent experience visiting Dr Usman and team, he listens to you with full intent of helping as much as he can within his reach and beyond.Thank you for the wonderful service you provide. We need more doctors like you who can help patients in need",
      author: "Ripshu Gupta",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "The staff members are all very friendly and helpful. Dr Usman took time and care to address a health concern I had. He listened, provided a thorough assessment and clearly answered all of my questions.",
      author: "Lisa McGrimmon",
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
        "I went in today to help my elderly friend understand the workings of this clinic. Everyone was helpful and kind. A very successful visit.",
      author: "Julie Gamblin",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "From beginning to end, I was truly grateful for the care and environment provided at Cobourg Care Clinic. Dr. Usman and the staff were incredibly friendly, warm, and thorough. Their professionalism and genuine concern made a difficult situation much more comfortable. I sincerely appreciate the exceptional level of care I received and would highly recommend this clinic to anyone in need.",
      author: "Being Her",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "Dr. Usman and his staff were very friendly and welcoming. Dr. Usman was kind, gentle and thorough in his exam of my symptoms. My family and I are thankful for his clinic as we were without a dr before him. Thank you Dr. Usman!",
      author: "Shelley Giroux",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "Dr. Usman is the best doctor my husband and I have ever seen. He’s compassionate and kind, never makes us feel like a burden and is never dismissive. So glad we found him :)",
      author: "A Scott",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "I did not find Terri particukarlybdusrespectful OR rude. Dr Usman was excellent and demionstrated hiscincern with my meducal problem... ie the reason I was there. Only criticism I would make is the sign in process usung one if the two modems. But Ibrequested Terris help and she cheerfully privioded it. I was more than appreciative to be anle to find this cli ic on a messy sniwy day in January. David",
      author: "David Laycock",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "I have had such great experiences here! Makda and Dr. Usman are super helpful and kind! Highly recommend!",
      author: "Dakota Xavier",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "I can’t say enough good things about this doctor’s office. From the front desk staff to the medical team, everyone is kind, professional, and truly caring. I always feel listened to and never rushed. It’s such a comfort knowing I’m in good hands here. Highly recommend!",
      author: "Jennifer Sedore",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "Maki the receptionist is so amazing and so kind. Dr Isah Usman is the best doctor. He’s very kind and helpful and will listen to you. I totally recommend the Cobourg care clinic thank you guys for all of your help!!!",
      author: "Nikita Buzzell",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "Amazing clinic! Dr. Usman has been so good to me and has already helped me so much in the short time i’ve been seeing him. All of the staff are friendly and helpful! i would definitely recommend Cobourg Care Clinic!Thank you so much",
      author: "Jaden",
      role: "Patient",
      rating: 5,
    },
    {
      quote:
        "The staff is exceptional and the welcoming environment is outstanding. Their attention to detail is remarkable, as evidenced by the birthday card they handed me on my birthday. Additionally, their expertise is swift and accurate, diagnosing the problem promptly and providing solutions in the same building, including bloodwork and other analyses. I highly recommend this clinic as an efficient, quick and overall wonderful place to visit for a walk-in appointment.",
      author: "Paul Brydson",
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
                      className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-300"
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
        <div className="flex justify-center">
          <a href="https://g.page/r/CXqL8ZuO08TnEAE/review" className="bg-[#0E31AC] text-white px-10 py-4 rounded-full">Read More</a>
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
              className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
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
