"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { src: "/gallary1.jpg", alt: "opening day video" },
  { src: "/gallary2.jpg", alt: "opening day video" },
  { src: "/gallary3.jpg", alt: "opening day video" },
  { src: "/gallary4.jpg", alt: "opening day video" },
  { src: "/gallary5.jpg", alt: "opening day video" },
  { src: "/gallary6.jpg", alt: "opening day video" },
  { src: "/gallary7.jpg", alt: "opening day video" },
  { src: "/gallary8.jpg", alt: "opening day video" },
  { src: "/gallary9.jpg", alt: "opening day video" },
  { src: "/gallary10.jpg", alt: "opening day video" },
];

const PictureGallery = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="mb-24">
      <h2 className="text-5xl md:text-[100px] xl:text-[140px] font-semibold md:font-medium mb-6 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Opening Event
      </h2>

      <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#EDEEF1] rounded-3xl p-6 lg:p-10">
        {/* Carousel */}
        <div className="relative w-full  lg:w-[65%] aspect-square overflow-hidden rounded-2xl">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
          >
            <FaChevronLeft className="w-6 h-6 text-[#0E31AC]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
          >
            <FaChevronRight className="w-6 h-6 text-[#0E31AC]" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${
                  current === i ? "bg-[#0E31AC]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Event Description */}
        <div className="flex items-center w-full lg:w-[35%]">
          <div className="space-y-4 sm:space-y-6">
            <p className="bg-white text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
              Cobourg Care Opening Event
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Official Opening by Councillor Brian Darling
            </h3>
            <p className="text-[#595959] text-base leading-relaxed">
              We are proud to announce the grand opening of the Cobourg Care
              Clinic, officially inaugurated by Councillor Brian Darling. This
              event marks a significant milestone in our mission to provide
              accessible, high-quality healthcare to our community.
            </p>
            <p className="text-[#595959] text-base leading-relaxed">
              The celebration featured a ribbon-cutting ceremony, tours of the
              new facilities, and a warm welcome to our patients, families, and
              community partners.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PictureGallery;
