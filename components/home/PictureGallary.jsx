"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMapPin2Line,
  RiCalendarEventLine,
  RiBuilding2Line,
  RiArrowRightUpLine,
} from "react-icons/ri";

const OPENING_EVENTS = [
  {
    id: "ontario-new-branch",
    tabLabel: "628 Ontario St (New Branch)",
    badge: "New Branch Grand Opening",
    location: "628 Ontario Street, Cobourg",
    title: "Grand Opening of Our Second Cobourg Location",
    paragraphs: [
      "Celebrating the expansion of Cobourg Care Clinic with the grand opening of our new branch at 628 Ontario Street, bringing expanded family healthcare and walk-in access to Cobourg.",
      "Led by Dr. Sunday, this new location is currently accepting new family practice registrations alongside daily walk-in care.",
    ],
    ctaLabel: "Book / Register at 628 Ontario St",
    ctaHref: "/appointments#ontario-street",
    isHighlighted: true,
    images: Array.from({ length: 12 }, (_, idx) => ({
      src: `/new-branch/${idx + 1}.jpeg`,
      alt: `628 Ontario Street new branch grand opening photo ${idx + 1}`,
    })),
  },
  {
    id: "william-original",
    tabLabel: "609 William St (Flagship Clinic)",
    badge: "Founding Clinic Opening",
    location: "Unit 5A, 609 William Street, Cobourg",
    title: "Official Opening by Councillor Brian Darling",
    paragraphs: [
      "Celebrating the founding grand opening of Cobourg Care Clinic at Unit 5A, 609 William Street, officially inaugurated by Councillor Brian Darling — marking the beginning of our mission to provide accessible, high-quality care in Cobourg.",
      "The celebration featured a ribbon-cutting ceremony, tours of our flagship clinic facilities, and a warm welcome to our patients, families, and community partners.",
    ],
    ctaLabel: "Book at 609 William St",
    ctaHref: "/appointments#william-street",
    isHighlighted: false,
    images: Array.from({ length: 10 }, (_, idx) => ({
      src: `/gallary${idx + 1}.jpg`,
      alt: `609 William Street clinic opening event photo ${idx + 1}`,
    })),
  },
];

function OpeningEventCard({ event }) {
  const [current, setCurrent] = useState(0);
  const total = event.images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <article
      className={`flex flex-col lg:flex-row gap-8 lg:gap-10 rounded-3xl p-5 sm:p-8 lg:p-10 transition-all ${event.isHighlighted
          ? "bg-white border-2 border-[#0E31AC]/25 shadow-md"
          : "bg-[#EDEEF1] border border-gray-200/70"
        }`}
    >
      {/* Carousel */}
      <div className="relative w-full lg:w-[60%] h-[420px] sm:h-[540px] lg:h-[620px] xl:h-[680px] overflow-hidden rounded-2xl bg-gray-900/5">
        {event.images.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              current === idx ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top"
              priority={event.isHighlighted && idx === 0}
            />
          </div>
        ))}

        {/* Top-left Location Overlay Badge */}
        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-black/65 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full">
          <RiMapPin2Line className="text-[#01bbf8] text-sm shrink-0" />
          <span>{event.location}</span>
        </div>

        {/* Top-right Counter */}
        <div className="absolute top-4 right-4 z-10 bg-black/65 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {current + 1} / {total}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={`Previous photo for ${event.location}`}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/85 hover:bg-white p-2.5 rounded-full shadow-md transition-colors cursor-pointer"
        >
          <RiArrowLeftSLine className="w-5 h-5 text-[#050660]" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label={`Next photo for ${event.location}`}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/85 hover:bg-white p-2.5 rounded-full shadow-md transition-colors cursor-pointer"
        >
          <RiArrowRightSLine className="w-5 h-5 text-[#050660]" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {event.images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`View photo ${i + 1} for ${event.location}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${current === i ? "w-5 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Event Details */}
      <div className="flex items-center w-full lg:w-[40%]">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3.5 rounded-full ${event.isHighlighted
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-white text-[#050660]"
                }`}
            >
              <RiCalendarEventLine className="text-sm shrink-0" />
              {event.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#0E31AC]/10 text-[#0E31AC] text-xs font-semibold py-1.5 px-3.5 rounded-full">
              <RiBuilding2Line className="text-sm shrink-0" />
              {event.location}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#050660] leading-snug">
            {event.title}
          </h3>

          <div className="space-y-3">
            {event.paragraphs.map((text, idx) => (
              <p
                key={idx}
                className="text-[#595959] text-sm sm:text-base leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href={event.ctaHref}
              className="inline-flex items-center gap-2 bg-primary-color hover:bg-[#0a2477] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              <span>{event.ctaLabel}</span>
              <RiArrowRightUpLine className="text-base" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

const PictureGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const visibleEvents =
    selectedFilter === "all"
      ? OPENING_EVENTS
      : OPENING_EVENTS.filter((ev) => ev.id === selectedFilter);

  return (
    <section className="mb-24 space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-5xl md:text-[100px] xl:text-[140px] font-semibold md:font-medium w-full text-center leading-tight sm:leading-snug md:leading-normal">
          Opening Events
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#595959] max-w-2xl mx-auto px-4">
          Milestones across our <strong>two Cobourg branches</strong> — explore
          moments from our new <strong>628 Ontario Street</strong> grand opening
          and our founding <strong>609 William Street</strong> clinic launch.
        </p>

        {/* Branch Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 px-4">
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${selectedFilter === "all"
                ? "bg-[#050660] text-white shadow-sm"
                : "bg-white text-[#595959] border border-gray-200 hover:border-[#0E31AC]/30"
              }`}
          >
            Both Locations
          </button>
          {OPENING_EVENTS.map((ev) => (
            <button
              key={ev.id}
              type="button"
              onClick={() => setSelectedFilter(ev.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${selectedFilter === ev.id
                  ? "bg-[#050660] text-white shadow-sm"
                  : "bg-white text-[#595959] border border-gray-200 hover:border-[#0E31AC]/30"
                }`}
            >
              {ev.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Distinct Event Showcases */}
      <div className="space-y-8">
        {visibleEvents.map((event) => (
          <OpeningEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default PictureGallery;
