"use client";

import React from "react";
import SafariBooking from "./SafariBooking";

const AppointmentChoice = () => {
  return (
    <div className="mb-24">
      {/* Header */}
      <div className="flex justify-center items-center mb-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-[140px] xl:text-[180px] font-semibold md:font-medium w-full text-center leading-tight sm:leading-snug md:leading-normal">
            Appointment.
          </h2>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="space-y-8 md:space-y-0 flex flex-col md:flex-row items-stretch justify-center gap-8 h-full">
        {/* Dr. Paul Edokpayi */}
        <section className="rounded-3xl bg-[#0B95C7]/10 p-6 w-full md:w-1/2 md:h-[500px] flex flex-col">
          <div className="space-y-4 sm:space-y-6 flex-1">
            <div className="flex justify-center">
              <p className="bg-[#EDEEF1] text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
                Venepuncture & Vaccination
              </p>
            </div>

            <div className="">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-2">
                Dr. Paul Edokpayi
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#595959] mb-4">
                For Venepuncture & Vaccination services
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-medium text-[#0E31AC] ">
                Available Services:
              </h4>
              <ul className="text-sm sm:text-base text-[#595959] space-y-1 ">
                <li>• Venepuncture</li>
                <li>• Vaccinations</li>
              </ul>
              <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded">
                <p className="text-xs text-amber-800">
                  <strong>Note:</strong> Only book Dr. Paul Edokpayi, for
                  vaccine and venepuncture appointments, Dr. Isah will not
                  attend to those services.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <SafariBooking
              title="Book with Dr. Paul Edokpayi"
              action="https://ocean.cognisantmd.com/online-booking/0f4224b4-b14a-49bf-a933-85d80d914726"
            />
          </div>
        </section>

        {/* Dr. Usman */}
        <section className="rounded-3xl bg-[#0B95C7]/10 p-6 w-full md:w-1/2 md:h-[500px] flex flex-col">
          <div className="space-y-4 sm:space-y-6 flex-1">
            <div className="flex justify-center">
              <p className="bg-[#EDEEF1] text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
                Experienced Family Physician
              </p>
            </div>

            <div className="">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-2">
                Dr. Isah Usman
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#595959] mb-4">
                Experienced Family physician with over a decade of experience
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-medium text-[#0E31AC] ">
                Available Services:
              </h4>
              <ul className="text-sm sm:text-base text-[#595959] space-y-1 ">
                <li>• General Consultations</li>
                <li>• Health Check-ups</li>
                <li>• Chronic Disease Management</li>
                <li>• Preventive Care</li>
                <li>• Family Medicine</li>
              </ul>
              <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded">
                <p className="text-xs text-amber-800">
                  <strong>Note:</strong> Only book Dr. Isah Usman appointments
                  for all other medical services, for vaccine and venepuncture
                  appointments, Dr. Paul will not attend to those services.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <SafariBooking
              title="Book with Dr. Isah Usman"
              action="https://ocean.cognisantmd.com/online-booking/e98fec3a-48b6-4f68-a13a-b22d9af268bc"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppointmentChoice;
