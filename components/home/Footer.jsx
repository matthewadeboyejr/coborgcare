"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";

import { CLINIC_BRANCHES, CLINIC_CONTACT } from "@/data/clinicLocations";

export default function Footer() {
  return (
    <footer className="bg-black rounded-b-4xl w-full md:p-16 lg:p-20 p-8 space-y-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Brand, Socials & Shared Contact */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-bold text-4xl sm:text-5xl leading-tight text-[#0B95C7]">
            Keeping Cobourg Healthy – One Family at a Time.
          </h2>

          <div className="text-white text-lg flex gap-5">
            <Link href="/" className="hover:opacity-80 cursor-pointer">
              <IoLogoLinkedin />
            </Link>
            <Link href="/" className="hover:opacity-80 cursor-pointer">
              <IoLogoFacebook />
            </Link>
          </div>

          <div className="text-white/85 text-sm space-y-1.5">
            <p>
              Phone:{" "}
              <a
                href={`tel:+1${CLINIC_CONTACT.phone}`}
                className="hover:text-[#0B95C7] transition-colors"
              >
                {CLINIC_CONTACT.phoneFormatted}
              </a>
            </p>
            <p>Fax: {CLINIC_CONTACT.fax}</p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="hover:text-[#0B95C7] transition-colors"
              >
                {CLINIC_CONTACT.email}
              </a>
            </p>
          </div>
        </div>

        {/* Navigation + Two Locations */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <FooterNavWeb />
          <FooterNavMobile />

          <div className="border-t border-white/15 pt-8">
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-5">
              Our Cobourg Locations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CLINIC_BRANCHES.map((branch) => (
                <div key={branch.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-sm text-[#0B95C7]">
                      {branch.shortAddress}
                    </p>
                    {branch.acceptingNewPatients && (
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        Accepting New Patients
                      </span>
                    )}
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {branch.fullAddress}
                  </p>
                  <p className="text-white/95 text-xs font-medium">
                    {branch.leadDoctor.name}
                  </p>
                  <p className="text-white/65 text-xs">
                    {branch.hours.weekday} &bull; {branch.hours.saturday}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-white/15 pt-5">
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
        { href: "/uninsured-services", label: "Uninsured Services & Fees" },
        { href: "/contact-us", label: "Help & support" },
        { href: "/#blog", label: "Blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about-us", label: "About Us" },
        { href: "/careers", label: "Careers" },
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
            <Link href="/uninsured-services">Uninsured Services & Fees</Link>
          </li>
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
          <li className="cursor-pointer opacity-90">
            <Link href="/careers">Careers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
