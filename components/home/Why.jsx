"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { TbHealthRecognition } from "react-icons/tb";
import Btn from "../Btn";
import BookingBtn from "./bookingappointment/BookingBtn";

const whyImages = [
  { src: "/new-branch/11.jpeg", alt: "Cobourg Care Clinic team and care" },
  { src: "/new-branch/12.jpeg", alt: "Cobourg Care Clinic new branch" },
];

const Why = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % whyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-24">
      <h2 className="text-4xl  md:text-[140px] xl:text-[180px] font-semibold  md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Why Cobourg
      </h2>
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#EDEEF1] b-5 rounded-3xl">
        <div className="w-full lg:w-[50%]  ">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2 bg-[#EDEEF1]">
            {whyImages.map((img, idx) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  currentImage === idx ? "opacity-100 z-[1]" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {whyImages.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setCurrentImage(idx)}
                  aria-label={`View image ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentImage === idx
                      ? "w-5 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text Content - Now takes 60% width on large screens */}
        <div className="flex items-center  w-full lg:w-[50%] pr-10">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center ">
              <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                Cobourg Clinic
              </p>
            </div>
            <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Dedicated to your health and well-being
            </h2>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="text-[#0E31AC] text-3xl">
                <MdOutlineHealthAndSafety />
              </span>
              <span className="font-semibold">Years Experience</span>
            </p>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="text-[#0E31AC] text-3xl">
                <SlBadge />
              </span>
              <span className="font-semibold">Medical Excellence</span>
            </p>

            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="text-[#0E31AC] text-3xl">
                <TbHealthRecognition />
              </span>
              <span className="font-semibold">In-Person/Walk-in</span>
            </p>
            <div className="flex justify-center md:justify-start">
              <BookingBtn title="Talk to someone" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Why;
