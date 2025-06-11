import Btn from "@/components/Btn";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  MdOutlineHealthAndSafety,
  MdOutlineSelfImprovement,
} from "react-icons/md";
import { RiHospitalFill } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { TbHealthRecognition } from "react-icons/tb";
import { VscDebugContinue } from "react-icons/vsc";

const About = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 mt-24 mb-">
        {/* Text Content - Now takes 60% width on large screens */}
        <div className="flex items-center w-full lg:w-[55%]">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center ">
              <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                Coburg Care Clinic
              </p>
            </div>

            <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Your trusted health partner
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-[#595959] max-w-[600px] mx-auto md:mx-0">
              Coburg Care Clinic is a trusted family healthcare provider located
              in the heart of Coburg, Ontario. We’re dedicated to delivering
              compassionate, accessible, and high-quality medical care to
              individuals and families in the community. With a strong focus on
              wellness and preventive health, our team provides a wide range of
              services in a professional and patient-friendly environment.
            </p>
            <div className="flex justify-center md:justify-start">
              <Btn title={"Book Appointment"} />
            </div>
          </div>
        </div>

        {/* Cards Grid - Now takes 40% width on large screens */}
        <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/doctor-male.jpg"
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
                  24/7 services
                </h3>
                <p className="text-xs sm:text-sm text-[#595959]">
                  Open 7 days a week, weekends & evenings, most holidays.
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
                  Walk-in Clinic
                </h3>
                <p className="text-xs sm:text-sm text-[#595959]">
                  Immediate medical attention for urgent health concerns.
                </p>
              </div>
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
              <Image
                src="/doctor-female.jpg"
                alt="doctor-female"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-24">
        <Marquee>
          <h2 className=" opacity-50 text-4xl  md:text-[140px] xl:text-[210px] font-semibold  md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
            Mission & Vision
          </h2>
        </Marquee>
        <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#EDEEF1] b-5 rounded-3xl">
          <div className="w-full lg:w-[50%]  ">
            <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
              <Image
                src="/group-team.jpg"
                alt="doctor-female"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content - Now takes 60% width on large screens */}
          <div className="flex items-center  w-full lg:w-[50%] pr-10 ">
            <div className="space-y-4 sm:space-y-6 w-full">
              <div className="flex md:block justify-center ">
                <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                  Coburg Care Clinic
                </p>
              </div>
              <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
                Our mission and core values
              </h2>
              <p>
                To deliver exceptional, compassionate, and personalized care to
                every patient while actively engaging with and strengthening our
                community. Through innovation, collaboration, and a relentless
                pursuit of excellence, we strive to set the standard for
                high-quality healthcare.
              </p>
              <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
                <span className="text-[#0E31AC] text-3xl">
                  <MdOutlineHealthAndSafety />
                </span>
                <span className="font-semibold">Patient-Centered Care </span>
              </p>
              <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
                <span className="text-[#0E31AC] text-3xl">
                  <TbHealthRecognition />
                </span>
                <span className="font-semibold">Community Commitment </span>
              </p>
              <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
                <span className="text-[#0E31AC] text-3xl">
                  <TbHealthRecognition />
                </span>
                <span className="font-semibold">Integrity & Compassion </span>
              </p>
              <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
                <span className="text-[#0E31AC] text-3xl">
                  <TbHealthRecognition />
                </span>
                <span className="font-semibold">Collaborative Excellence </span>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
