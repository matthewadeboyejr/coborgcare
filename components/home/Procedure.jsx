import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import Btn from "../Btn";
import Links from "../Links";
import BookingBtn from "./bookingappointment/BookingBtn";

const Procedure = () => {
  return (
    <div className="mb-24">
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12  b-5 rounded-3xl bg-[#0B95C7]/10">
        <div className="w-full lg:w-[50%]  ">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="/drusmas.png"
              alt="dr-usman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content - Now takes 60% width on large screens */}
        <div className="flex items-center w-full lg:w-[50%] md:pr-10 px-5">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center mt-5">
              <p className=" bg-[#EDEEF1] text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                Your experience matters to us
              </p>
            </div>

            <ul className="space-y-4 list-disc list-inside  ">
              <li className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                As you arrive, enjoy our spacious, free parking. Just head
                straight to Unit 5A.
              </li>
              <li className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                Check in at our self-service kiosk; it’s fast, easy, and
                user-friendly.
              </li>
              <li className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                Need help? Our welcoming receptionist is here to help you.
              </li>
              <li className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                Once checked in, your number appears on the screen, or a staff
                member will call you in.
              </li>
              <li className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                If needed, we’ll take your vitals, then it’s time to see your
                doctor. Easy, efficient, caring.
              </li>
            </ul>

            <div className="flex justify-center md:justify-start">
              <BookingBtn />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procedure;
