"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Btn from "./Btn";
import Image from "next/image";
import Links from "./Links";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between bg-white rounded-full py-3 px-5 shadow-sm">
        <Link href="/" className="relative w-full max-w-[100px] ">
          <Image
            className="w-10 h-10"
            src="/logopng.png"
            alt="Primary Logo"
            width={100}
            height={100}
            priority
            layout="responsive"
          />
        </Link>

        <ul className="flex gap-5">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium text-[#595959] hover:primary-color transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Links title={"Book Appointment Now"} action="/appointments" />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white rounded-full">
        <div className="relative w-full max-w-[100px] ">
          <Image
            className="w-10 h-10"
            src="/logopng.png"
            alt="Primary Logo"
            width={100}
            height={100}
            priority
            layout="responsive"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-2xl text-[#595959] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white  z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-20  ">
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-2xl font-medium text-[#595959] hover:text-[#0E31AC] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <button className="bg-primary-color px-8 py-4 rounded-full text-white hover:bg-[#0a2477] transition-colors duration-300 text-lg font-medium">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Navigation items data
const navItems = [
  { name: "Home", href: "/" },
  /* { name: "Services", href: "/services" }, */
  { name: "Doctors", href: "/doctors" },
  { name: "Appointments", href: "/appointments" },
  { name: "Contact", href: "/contact-us" },
  { name: "About Us", href: "/about-us" },
];

export default NavBar;
