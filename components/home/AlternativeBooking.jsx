import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import Btn from "../Btn";
import Links from "../Links";

const AlternativeBooking = () => {
  return (
    <div className="mb-24">
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12  b-5 rounded-3xl bg-[#0B95C7]/10">
        <div className="w-full lg:w-[50%]  ">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="/frontDoor.png"
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
            {/* <div className="flex md:block justify-center mt-5">
              <p className=" bg-[#EDEEF1] text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                Experienced our online booking
              </p>
            </div> */}

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight">
                Book an appointment with us online.
              </h2>
              <p className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                We want you to have the best experience possible.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://ocean.cognisantmd.com/online-booking/e98fec3a-48b6-4f68-a13a-b22d9af268bc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-color px-6 py-3 sm:px-6 sm:py-4 rounded-full text-white hover:bg-[#0a2477] transition-colors duration-300 text-sm sm:text-base font-medium "
              >
                Book Appointment Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlternativeBooking;
