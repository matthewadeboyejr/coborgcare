import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import Btn from "../Btn";

const OurDoctors = () => {
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
                Experienced Family physician
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight">
                Dr. Isah Usman
              </h2>
              <p className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] ">
                Experienced Family physician with over a decade years of
                experience
              </p>
            </div>
            <div className="flex md:block justify-center ">
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/isah-usman-651991131/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="p-2 rounded-full  bg-[#EDEEF1] hover:bg-white/90 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5 text-[#0E31AC]  hover:text-[#0E31AC]/80 " />
                </a>
                <a
                  href="https://www.linkedin.com/in/isah-usman-651991131/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="p-2 rounded-full bg-[#EDEEF1] hover:bg-white/90 transition-colors"
                >
                  <FiTwitter className="w-5 h-5 text-[#0E31AC]  hover:text-[#0E31AC]/80" />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Btn title={"Book Appointment"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurDoctors;
