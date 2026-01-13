"use client";

import React from "react";
import { MdWarning } from "react-icons/md";

const HolidayNotice = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0E31AC] via-[#1a4dd4] to-[#0E31AC] text-white py-5 px-4 sm:px-6 md:px-12 lg:px-24 -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-24 mb-6 shadow-2xl border-b-4 border-yellow-400">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-white"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)",
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-shrink-0">
          <MdWarning className="text-3xl sm:text-4xl animate-bounce text-yellow-300" />
        </div>
        <div className="text-center sm:text-left flex-1">
          <p className="text-base sm:text-lg font-semibold leading-relaxed">
            <span className="inline-block mr-2 text-xl">ℹ️</span>
            <strong className="text-yellow-300">Important Notice:</strong>{" "}
            <strong className="text-yellow-300 text-lg sm:text-xl">
              Dr. Mario Kangeswaren
            </strong>{" "}
            is no longer with Cobourg Care Clinic. Due to personal
            circumstances, he was unable to continue with us. We thank him for
            his service and wish him well in his future endeavors.
            <span className="block mt-2 text-sm sm:text-base">
              For appointments, please book with <strong>Dr. Isah Usman</strong>{" "}
              or <strong>Dr. Paul</strong>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HolidayNotice;
