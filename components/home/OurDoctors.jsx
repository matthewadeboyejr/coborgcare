import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import Btn from "../Btn";
import Links from "../Links";
import BookingBtn from "./bookingappointment/BookingBtn";

const OurDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Isah Usman",
      image: "/drusmas.png",
      description:
        "Experienced Family physician with over a decade years of experience",
      link: "https://www.linkedin.com/in/isah-usman-651991131/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter:
        "https://www.linkedin.com/in/isah-usman-651991131/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      name: "Dr. Mario Kangeswaren",
      image: "/drmario.jpeg",
      description:
        "Experienced Family physician with over a decade years of experience",
      link: "",
      twitter: "",
    },
  ];
  return (
    <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
      {doctors.map((doctor) => (
        <section
          key={doctor.id}
          className="flex flex-col-reverse justify-between gap-8   b-5 rounded-3xl bg-[#0B95C7]/10"
        >
          <div className="w-full   ">
            <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
              <Image
                src={doctor.image}
                alt={doctor.name}
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
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight text-nowrap">
                  {doctor.name}
                </h2>
                <p className=" text-center md:text-left  text-sm sm:text-base md:text-lg  text-[#595959] md:text-nowrap">
                  {doctor.description}
                </p>
              </div>
              <div className="flex md:block justify-center ">
                <div className="flex space-x-4 mt-8">
                  <a
                    href={doctor.link}
                    className="p-2 rounded-full  bg-[#EDEEF1] hover:bg-white/90 transition-colors"
                  >
                    <FiLinkedin className="w-5 h-5 text-[#0E31AC]  hover:text-[#0E31AC]/80 " />
                  </a>
                  <a
                    href={doctor.twitter}
                    className="p-2 rounded-full bg-[#EDEEF1] hover:bg-white/90 transition-colors"
                  >
                    <FiTwitter className="w-5 h-5 text-[#0E31AC]  hover:text-[#0E31AC]/80" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <BookingBtn />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OurDoctors;
