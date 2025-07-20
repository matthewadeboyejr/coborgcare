"use client";

import React, { useState } from "react";
import useBrowser from "@/hook/usebrowser";
import AlternativeBooking from "../AlternativeBooking";
const OceanBooking = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { isSafari } = useBrowser();

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="bg-[#F7F8FC] rounded-2xl p-6 mb-24 relative">
      <h2 className="text-5xl md:text-[140px] xl:text-[180px] font-semibold md:font-medium w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Appointment.
      </h2>

      <AlternativeBooking />

      {/*  {!isSafari && (
        <>
          {isLoading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-80 z-10 rounded-2xl">
              <div className="text-gray-500 text-xl animate-pulse">
                Just a moment, loading booking system...
              </div>
            </div>
          )}
          <iframe
            width="100%"
            height="600"
            src="https://ocean.cognisantmd.com/online-booking/e98fec3a-48b6-4f68-a13a-b22d9af268bc"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            onLoad={handleLoad}
            className="relative z-0 rounded-2xl"
          />
        </>
      )} */}
    </section>
  );
};

export default OceanBooking;
