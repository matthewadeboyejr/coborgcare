import Image from "next/image";
import React from "react";
import Btn from "../Btn";

const Header = () => {
  return (
    <header className="w-full mb-24 mt-7 md:mt-24 ">
      <h1 className="text-5xl   md:text-[140px] xl:text-[210px] font-semibold  md:font-medium  w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Coborg Care
      </h1>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8  ">
        <div className="flex items- w-full lg:w-1/2 md:mt-12">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <p className="text-base sm:text-lg md:text-lg text-center md:text-left opacity-50">
              Accessible, Quality Healthcare for Coburg Families. We offer
              compassionate medical care and preventive health services tailored
              to your family's unique needs. Experience trusted healthcare in a
              welcoming environment.
            </p>
            <div className="md:justify-start w-full hidden md:flex">
              <Btn title={"Book Now"} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[350px] lg:w-[350px]">
            <Image
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gentle-bounce w-full h-auto"
              src="/drusman.png"
              alt="Healthcare illustration"
              width={350}
              height={350}
              priority
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
