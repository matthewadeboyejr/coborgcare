import Image from "next/image";
import React from "react";
import { RiHospitalFill } from "react-icons/ri";
import Btn from "../Btn";
import Links from "../Links";
import BookingBtn from "./bookingappointment/BookingBtn";

const OverView = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 mb-24">
      {/* Text Content - Now takes 60% width on large screens */}
      <div className="flex items-center w-full lg:w-[55%]">
        <div className="space-y-4 sm:space-y-6 w-full">
          <div className="flex md:block justify-center ">
            <p className=" bg-[#EDEEF1] flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
              Cobourg Clinic
            </p>
          </div>

          <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
            Convenient, quality medical care in the heart of Cobourg
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-[#595959] max-w-[600px] mx-auto md:mx-0">
            We provide one of the best holistic care in Cobourg,Canada for for
            years. Your health lies at the heart of everything we do.
          </p>
          <div className="flex justify-center md:justify-start">
            <BookingBtn />
          </div>
        </div>
      </div>

      {/* Cards Grid - Now takes 40% width on large screens */}
      <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/overview1.png"
              alt="doctor-male"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-[#0B95C7]/10 p-3 sm:p-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[#0E31AC] bg-white p-2 rounded-full w-fit">
                <RiHospitalFill size={20} />
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                Premium Services
              </h3>
              <p className="text-xs sm:text-sm text-[#595959]">
                We offer a wide range of services to meet your needs. We are
                here to help you.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="rounded-xl sm:rounded-2xl bg-[#0B95C7]/10 p-3 sm:p-4 order-2 sm:order-1">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[#0E31AC] bg-white p-2 rounded-full w-fit">
                <RiHospitalFill size={20} />
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                Convenient Location
              </h3>
              <p className="text-xs sm:text-sm text-[#595959]">
                We are located in the heart of Cobourg, we are easily accessible
                from all parts of the town.
              </p>
            </div>
          </div>
          <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="/overview2.png"
              alt="doctor-female"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
