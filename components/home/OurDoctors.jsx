import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import { MdLocationOn, MdPersonAddAlt1 } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import SafariBooking from "./bookingappointment/SafariBooking";
import { CLINIC_BRANCHES } from "@/data/clinicLocations";

const OurDoctors = () => {
  return (
    <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {CLINIC_BRANCHES.map((branch) => {
        const doctor = branch.leadDoctor;
        return (
          <section
            key={branch.id}
            className="flex flex-col-reverse justify-between gap-6 rounded-3xl bg-[#0B95C7]/10 p-5 sm:p-6"
          >
            {/* Portrait / Placeholder */}
            <div className="w-full">
              <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#050660]/10 via-[#0E31AC]/10 to-[#0B95C7]/20 flex items-center justify-center">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-24 h-24 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-[#0E31AC]">
                      <FaUserDoctor className="w-11 h-11" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-[#050660]">
                        {doctor.name}
                      </p>
                      <span className="inline-block bg-white/80 text-[#595959] text-xs font-medium px-3 py-1 rounded-full">
                        Photo Coming Soon
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex items-center w-full">
              <div className="space-y-4 w-full">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                  <span className="inline-flex items-center gap-1 bg-[#EDEEF1] text-[#0E31AC] text-xs sm:text-sm font-medium py-1.5 px-3.5 rounded-full">
                    <MdLocationOn className="text-base shrink-0" />
                    {branch.shortAddress}
                  </span>
                  {branch.acceptingNewPatients && (
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold py-1.5 px-3.5 rounded-full">
                      <MdPersonAddAlt1 className="text-base shrink-0" />
                      Accepting New Patients
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0E31AC] text-center md:text-left">
                    {doctor.role}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left leading-tight">
                    {doctor.name}
                  </h2>
                  <p className="text-center md:text-left text-sm sm:text-base text-[#595959]">
                    {doctor.bio}
                  </p>
                </div>

                {doctor.linkedin && (
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={doctor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${doctor.name} LinkedIn`}
                      className="p-2.5 rounded-full bg-[#EDEEF1] hover:bg-white transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5 text-[#0E31AC] hover:text-[#0E31AC]/80" />
                    </a>
                  </div>
                )}

                <div className="flex justify-center md:justify-start pt-1">
                  <SafariBooking
                    title={doctor.bookingLabel}
                    action={doctor.bookingUrl}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default OurDoctors;
