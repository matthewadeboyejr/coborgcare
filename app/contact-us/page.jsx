import React from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import { FaAt, FaFax, FaLocationArrow, FaPhone } from "react-icons/fa";
import Map from "@/components/home/Map";

const ContactUs = () => {
  return (
    <>
      <section className="w-full mb-16 md:mb-24 mt-7 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <h1 className="text-5xl   md:text-[140px] xl:text-[210px] font-semibold  md:font-medium  w-full text-center leading-tight sm:leading-snug md:leading-normal">
          Contact Us
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 w-full max-w-7xl mx-auto mt-8 md:mt-16">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaAt className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a
                    href="mailto:hello@coborgcarelinic.ca"
                    className="text-[#595959] hover:text-primary-color transition-colors"
                  >
                    hello@coborgcarelinic.ca
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <a
                    href="tel:+1629138798"
                    className="text-[#595959] hover:text-primary-color transition-colors"
                  >
                    6475089094
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaFax className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Fax</h3>
                  <a
                    href="tel:+1629138798"
                    className="text-[#595959] hover:text-primary-color transition-colors"
                  >
                    (905) 2917547
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaLocationArrow className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Address</h3>
                  <p className="text-[#595959]">
                    Unit 5A, 609 William Street
                    <br />
                    Coburg, Ontario, K9A 3A6
                    <br />
                    Canada
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <form className="space-y-5 md:space-y-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="w-full">
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    placeholder="Full Name"
                    className="border w-full rounded-full px-5 py-3 md:py-4 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="border w-full rounded-full px-5 py-3 md:py-4 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="border w-full rounded-full px-5 py-3 md:py-4 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="border w-full rounded-3xl px-5 py-3 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <Btn title={"Send Message"} className="w-full md:w-auto" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
};

export default ContactUs;
