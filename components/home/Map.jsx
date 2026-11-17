import React from "react";
import { MdLocationOn, MdAccessTime, MdOpenInNew } from "react-icons/md";
import { CLINIC_BRANCHES } from "@/data/clinicLocations";

const Map = () => {
  return (
    <section className="w-full mb-12">
      <div className="text-center mb-8 space-y-2">
        <span className="inline-block bg-[#EDEEF1] text-[#0E31AC] text-xs sm:text-sm font-medium py-1.5 px-4 rounded-full">
          Two Convenient Locations
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#171717]">
          Find Us in Cobourg
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CLINIC_BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 flex flex-col"
          >
            <div className="p-5 sm:p-6 space-y-2 border-b border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#050660] flex items-center gap-2">
                  <MdLocationOn className="text-[#0E31AC] shrink-0" />
                  {branch.shortAddress}
                </h3>
                {branch.acceptingNewPatients && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Accepting New Patients
                  </span>
                )}
              </div>
              <p className="text-sm text-[#595959]">
                <strong>{branch.leadDoctor.name}</strong> &bull;{" "}
                {branch.fullAddress}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[#595959]">
                <span className="inline-flex items-center gap-1.5">
                  <MdAccessTime className="text-[#0E31AC] shrink-0" />
                  {branch.hours.weekday} &bull; {branch.hours.saturday}
                </span>
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0E31AC] font-medium hover:underline"
                >
                  Directions <MdOpenInNew className="text-sm" />
                </a>
              </div>
            </div>

            <iframe
              className="w-full"
              title={`Map for ${branch.fullAddress}`}
              width="100%"
              height="360"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${branch.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Map;
