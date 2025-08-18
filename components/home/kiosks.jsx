import Image from "next/image";
import { MdTouchApp } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { TbReceipt } from "react-icons/tb";
import Btn from "../Btn";
import BookingBtn from "./bookingappointment/BookingBtn";

const Kiosks = () => {
  return (
    <section className="mb-24">
      <h2 className="text-5xl md:text-[100px] xl:text-[140px] font-semibold md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Use the Kiosks
      </h2>
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#EDEEF1] rounded-3xl">
        <div className="w-full lg:w-[50%]">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="/kiosks.jpg"
              alt="Clinic self check-in kiosk"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex items-center w-full lg:w-[50%] pr-10">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center">
              <p className="bg-white flex justify-center text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
                Cobourg Clinic
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Quick & Easy Self Check-In
            </h2>

            <p className="bg-white/50 rounded-b-4xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
              After arriving for your appointment at the clinic, locate the
              self-check-in kiosk and follow these simple steps to check in
              easily.
            </p>
            <p className="bg-white/50 rounded-b-4xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
              <span className="text-[#0E31AC] text-3xl">
                <MdTouchApp />
              </span>
              <span className="font-semibold">
                Step 1: Tap the screen to begin
              </span>
            </p>

            <p className="bg-white/50 rounded-b-4xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
              <span className="text-[#0E31AC] text-3xl">
                <SlBadge />
              </span>
              <span className="font-semibold">
                Step 2: Enter your name & appointment details
              </span>
            </p>

            <p className="bg-white/50 rounded-b-4xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
              <span className="text-[#0E31AC] text-3xl">
                <TbReceipt />
              </span>
              <span className="font-semibold">
                Step 3: Collect your check-in slip & wait to be called
              </span>
            </p>

            <div className="flex justify-center md:justify-start">
              <BookingBtn />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Kiosks;
