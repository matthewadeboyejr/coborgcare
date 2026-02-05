import Image from "next/image";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { TbHealthRecognition } from "react-icons/tb";
import Btn from "../Btn";
import BookingBtn from "./bookingappointment/BookingBtn";

const Tests = () => {
  return (
    <section className="mb-24 bg-[#32BBF8] rounded-4xl p-5">
      <h2 className="text-3xl  md:text-[100px] xl:text-[140px] font-semibold  md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        TB Test & Immunisation
      </h2>
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#0046B7]/15g b-5 rounded-3xl">


        {/* Text Content - Now takes 60% width on large screens */}
        <div className="flex items-center  w-full lg:w-[50%] pr-10 ">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center ">
              <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                TB Test & Immunisation
              </p>
            </div>
            <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Students who need TB test or Immunisation are welcome to book appointment
            </h2>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="text-[#0E31AC] text-3xl">
                <MdOutlineHealthAndSafety />
              </span>
              <span className="font-semibold">TB Test or Immunisation Available</span>
            </p>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="text-[#0E31AC] text-3xl">
                <SlBadge />
              </span>
              <span className="font-semibold">Walk-in Appointments</span>
            </p>

            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="text-[#0E31AC] text-3xl">
                <TbHealthRecognition />
              </span>
              <span className="font-semibold">Protect Yourself</span>
            </p>
            <div className="flex justify-center md:justify-start">
              <BookingBtn title="Book an appointment" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%]  ">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="/test.png"
              alt="tests_flyer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tests;
