"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black rounded-b-4xl w-full md:p-20 p-8 space-y-20">
      <div className="flex md:flex-row flex-col md:items-center  gap-16 ">
        <div className="space-y-5 2/4 ">
          <h2 className="font-bold text-5xl text-[#0B95C7]">
            Keeping Cobourg Healthy – One Family at a Time.
          </h2>
          <p className="text-white text-lg flex gap-5">
            <Link href="/" className=" hover:opacity-90 cursor-pointer">
              <IoLogoLinkedin />
            </Link>
            <Link href="/" className=" hover:opacity-90 cursor-pointer">
              <IoLogoFacebook />
            </Link>
          </p>
          <div className="text-white space-y-2">
            <p>
              Address: Unit 5A, 609 William Street Cobourg, Ontario, K9A 3A6,
              Canada
            </p>
            <p>Open: Mon-Fri 9:30AM - 5:00PM, Sat 10:00AM - 4:00PM</p>
            <p>Phone: 6475089094</p>
            <p>Fax: (905) 2917547</p>
          </div>
        </div>
        <FooterNavWeb />
        <FooterNavMobile />
      </div>

      <div className="flex items-center border-t pt-3">
        <div className="relative w-full max-w-[100px] ">
          <Image
            className="w-10 h-10"
            src="/logopngblk.png"
            alt="secondary Logo"
            width={100}
            height={100}
            priority
            layout="responsive"
          />
        </div>
        <span className="text-[#F2F2F2]/80 text-xs ">
          @ Cobourg Care Clinic
        </span>
      </div>
    </footer>
  );
}

export function FooterNavMobile() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Quick Link",
      links: [
        { href: "/appointments", label: "Book Now" },
        { href: "/contact-us", label: "Contact us" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/contact-us", label: "Help & support" },
        { href: "/#blog", label: "Blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about-us", label: "About Us" },
        { href: "/policy", label: "Privacy policy" },
      ],
    },
  ];

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="text-white space-y-2 md:hidden">
      {sections.map((section) => (
        <div
          key={section.title}
          className="border-b border-white/20 last:border-b-0"
        >
          <div
            onClick={() => toggleSection(section.title)}
            className="font-semibold text-lg flex items-center justify-between p-4 cursor-pointer"
          >
            <span>{section.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                openSection === section.title ? "rotate-180" : ""
              }`}
            >
              <IoChevronDownSharp />
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === section.title
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-4 p-4 pt-0">
              {section.links.map((link) => (
                <li
                  key={link.label}
                  className="cursor-pointer opacity-90 text-base"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FooterNavWeb() {
  return (
    <div className=" md:flex-row flex-col w-full justify-between hidden md:flex">
      <div className="text-white text-xs space-y-2">
        <p className="font-semibold  ">Quick Link</p>
        <ul className="space-y-3 font-medium">
          <li className="cursor-pointer opacity-90">
            <Link href="/appointments">Book Now</Link>
          </li>
          <li className="cursor-pointer opacity-90">
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="text-white text-xs space-y-2">
        <p className="font-semibold  ">Resources</p>
        <ul className="space-y-3 font-medium">
          <li className="cursor-pointer opacity-90">
            <Link href="/contact-us">Help & support</Link>
          </li>
        </ul>
      </div>
      <div className="text-white text-xs space-y-2">
        <p className="font-semibold  ">Company</p>
        <ul className="space-y-3 font-medium">
          <li className="cursor-pointer opacity-90">
            <Link href="/about-us">About Us</Link>
          </li>

          <li className="cursor-pointer opacity-90">
            <Link href="/policy ">Privacy policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
