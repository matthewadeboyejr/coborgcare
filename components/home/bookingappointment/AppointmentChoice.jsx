"use client";

import React from "react";
import Link from "next/link";
import {
  RiMapPin2Line,
  RiTimeLine,
  RiUserAddLine,
  RiHospitalLine,
  RiSyringeLine,
  RiStethoscopeLine,
  RiInformationLine,
  RiCheckboxCircleLine,
  RiArrowRightUpLine,
  RiCompass3Line,
} from "react-icons/ri";
import SafariBooking from "./SafariBooking";
import { CLINIC_BRANCHES } from "@/data/clinicLocations";

const AppointmentChoice = () => {
  const williamBranch = CLINIC_BRANCHES.find((b) => b.id === "william");
  const ontarioBranch = CLINIC_BRANCHES.find((b) => b.id === "ontario");

  return (
    <div id="booking-branches" className="mb-24 max-w-6xl mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="flex justify-center items-center mb-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-[140px] xl:text-[180px] font-semibold md:font-medium w-full text-center leading-tight sm:leading-snug md:leading-normal">
            Appointment.
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-[#595959] max-w-2xl px-4 mt-2">
            We operate across <strong>two Cobourg locations</strong>. Choose your
            preferred branch below to book with the right physician.
          </p>
        </div>
      </div>

      {/* Modern Triage & Booking Guidance Card */}
      <div className="mb-12 space-y-5">
        <div className="bg-gradient-to-br from-[#050660] to-[#0E31AC] text-white p-7 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#01bbf8]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-56 h-56 bg-[#0B95C7]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-white/10 border border-white/15 rounded-xl text-2xl text-[#01bbf8] shrink-0">
                  <RiCompass3Line />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    How to Choose the Right Branch &amp; Doctor
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mt-0.5">
                    Quickly match your visit type to the right Cobourg clinic location.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-400/15 border border-emerald-300/30 text-emerald-200 text-xs font-semibold px-3.5 py-1.5 rounded-full w-fit">
                <RiCheckboxCircleLine className="text-sm shrink-0" />
                Walk-Ins Welcome at Both Locations
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-5 text-sm leading-relaxed">
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/15 space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#01bbf8] font-semibold">
                  <span className="p-2 rounded-lg bg-white/10 text-lg">
                    <RiUserAddLine />
                  </span>
                  <h4 className="text-base font-bold text-white">
                    New Family Practice Patients
                  </h4>
                </div>
                <p className="text-white/85 text-xs sm:text-sm">
                  Register &amp; book with{" "}
                  <strong className="text-white">
                    Dr. Sunday
                  </strong>{" "}
                  at our{" "}
                  <strong className="text-[#01bbf8]">628 Ontario Street</strong>{" "}
                  branch.
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/15 space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#01bbf8] font-semibold">
                  <span className="p-2 rounded-lg bg-white/10 text-lg">
                    <RiHospitalLine />
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Walk-In &amp; General Care
                  </h4>
                </div>
                <p className="text-white/85 text-xs sm:text-sm">
                  Walk-ins &amp; consultations are welcome at{" "}
                  <strong className="text-white">both clinics</strong>:{" "}
                  <strong className="text-white">Dr. Isah Usman</strong> (609
                  William St) &amp;{" "}
                  <strong className="text-white">Dr. Sunday</strong> (628 Ontario
                  St).
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/15 space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#01bbf8] font-semibold">
                  <span className="p-2 rounded-lg bg-white/10 text-lg">
                    <RiSyringeLine />
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Blood Work &amp; Immunizations
                  </h4>
                </div>
                <p className="text-white/85 text-xs sm:text-sm">
                  Existing/rostered patients coming for venepuncture or vaccines
                  book under <strong className="text-white">Dr. Paul</strong> at{" "}
                  <strong className="text-[#01bbf8]">
                    609 William Street only
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Uninsured Fee Notice Banner */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-sm text-[#050660] text-center sm:text-left">
            <span className="hidden sm:flex p-2 bg-[#0E31AC]/10 text-[#0E31AC] rounded-xl text-lg shrink-0">
              <RiInformationLine />
            </span>
            <div>
              <span className="font-bold">Notice regarding non-OHIP services:</span>{" "}
              Administrative forms, sick notes, driver&apos;s physicals, and
              medical reports are uninsured by OHIP.
            </div>
          </div>
          <Link
            href="/uninsured-services"
            className="shrink-0 inline-flex items-center gap-1.5 bg-[#0E31AC] hover:bg-[#050660] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            View Fee Schedule &amp; FAQs
            <RiArrowRightUpLine className="text-sm" />
          </Link>
        </div>
      </div>

      {/* Two Branch Side-by-Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Branch 1: 609 William Street — Dr. Isah Usman (+ Dr. Paul) */}
        <section
          id={williamBranch.anchor}
          className="rounded-3xl bg-white border border-gray-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6"
        >
          <div className="space-y-5">
            {/* Branch Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#0E31AC]/10 text-[#0E31AC] text-xs sm:text-sm font-semibold py-2 px-4 rounded-full">
                <RiMapPin2Line className="text-base shrink-0" />
                {williamBranch.shortAddress}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#EDEEF1] text-[#050660] text-xs font-semibold py-1.5 px-3 rounded-full">
                <RiCheckboxCircleLine className="text-[#0E31AC] text-sm" />
                Walk-Ins Welcome
              </span>
            </div>

            {/* Address & Hours */}
            <div className="bg-[#F7F8FC] border border-gray-100 rounded-2xl p-4 space-y-1.5 text-sm text-[#595959]">
              <p className="font-semibold text-[#050660]">
                {williamBranch.fullAddress}
              </p>
              <p className="flex items-center gap-2 text-xs sm:text-sm">
                <RiTimeLine className="text-[#0E31AC] shrink-0 text-base" />
                <span>
                  {williamBranch.hours.weekday} &bull;{" "}
                  {williamBranch.hours.saturday}
                </span>
              </p>
            </div>

            {/* Lead Doctor: Dr. Isah Usman */}
            <div className="space-y-3">
              <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0E31AC]">
                  <RiStethoscopeLine className="text-sm" />
                  {williamBranch.leadDoctor.role}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#050660] mt-1">
                  {williamBranch.leadDoctor.name}
                </h3>
                <p className="text-sm sm:text-base text-[#595959] mt-1">
                  {williamBranch.leadDoctor.bio}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0E31AC] mb-2">
                  Available Services
                </h4>
                <ul className="text-sm text-[#595959] space-y-1.5">
                  {williamBranch.leadDoctor.services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <RiCheckboxCircleLine className="text-[#0E31AC] shrink-0 text-base" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-start gap-2.5">
                <RiInformationLine className="text-amber-700 text-lg shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>Note:</strong> {williamBranch.leadDoctor.note}
                </p>
              </div>

              <div className="pt-1">
                <SafariBooking
                  title={williamBranch.leadDoctor.bookingLabel}
                  action={williamBranch.leadDoctor.bookingUrl}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Supporting Clinician at William St: Dr. Paul */}
          {williamBranch.supportingClinician && (
            <div className="rounded-2xl bg-[#0B95C7]/10 border border-[#0B95C7]/25 p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="p-2.5 bg-white text-[#0E31AC] rounded-xl text-lg shadow-xs shrink-0">
                  <RiSyringeLine />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0E31AC]">
                    {williamBranch.supportingClinician.role}
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold text-[#050660]">
                    {williamBranch.supportingClinician.name}
                  </h4>
                </div>
              </div>
              <ul className="text-xs sm:text-sm text-[#595959] space-y-1">
                {williamBranch.supportingClinician.services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <RiCheckboxCircleLine className="text-[#0E31AC] shrink-0 text-sm" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#595959]">
                {williamBranch.supportingClinician.note}
              </p>
              <SafariBooking
                title={williamBranch.supportingClinician.bookingLabel}
                action={williamBranch.supportingClinician.bookingUrl}
                className="w-full !bg-[#0E31AC] hover:!bg-[#050660]"
              />
            </div>
          )}
        </section>

        {/* Branch 2: 628 Ontario Street — Dr. Sunday */}
        <section
          id={ontarioBranch.anchor}
          className="rounded-3xl bg-white border-2 border-[#0E31AC]/25 shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6 relative"
        >
          <div className="space-y-5">
            {/* Branch Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#0E31AC]/10 text-[#0E31AC] text-xs sm:text-sm font-semibold py-2 px-4 rounded-full">
                <RiMapPin2Line className="text-base shrink-0" />
                {ontarioBranch.shortAddress}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-semibold py-1.5 px-3 rounded-full">
                  <RiUserAddLine className="text-sm" />
                  Accepting New Patients
                </span>
                <span className="inline-flex items-center gap-1 bg-[#EDEEF1] text-[#050660] text-xs font-semibold py-1.5 px-3 rounded-full">
                  <RiCheckboxCircleLine className="text-[#0E31AC] text-sm" />
                  Walk-Ins Welcome
                </span>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="bg-[#F7F8FC] border border-gray-100 rounded-2xl p-4 space-y-1.5 text-sm text-[#595959]">
              <p className="font-semibold text-[#050660]">
                {ontarioBranch.fullAddress}
              </p>
              <p className="flex items-center gap-2 text-xs sm:text-sm">
                <RiTimeLine className="text-[#0E31AC] shrink-0 text-base" />
                <span>
                  {ontarioBranch.hours.weekday} &bull;{" "}
                  {ontarioBranch.hours.saturday}
                </span>
              </p>
            </div>

            {/* Lead Doctor: Dr. Sunday */}
            <div className="space-y-3">
              <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  <RiStethoscopeLine className="text-sm" />
                  {ontarioBranch.leadDoctor.role}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#050660] mt-1">
                  {ontarioBranch.leadDoctor.name}
                </h3>
                <p className="text-sm sm:text-base text-[#595959] mt-1">
                  {ontarioBranch.leadDoctor.bio}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0E31AC] mb-2">
                  Available Services
                </h4>
                <ul className="text-sm text-[#595959] space-y-1.5">
                  {ontarioBranch.leadDoctor.services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <RiCheckboxCircleLine className="text-emerald-600 shrink-0 text-base" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-200/80 rounded-2xl flex items-start gap-2.5">
                <RiUserAddLine className="text-emerald-700 text-lg shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  <strong>Now Registering New Patients:</strong>{" "}
                  {ontarioBranch.leadDoctor.note}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="rounded-2xl bg-[#F7F8FC] border border-gray-200/80 p-4 text-xs sm:text-sm text-[#595959] flex items-start gap-2.5">
              <RiSyringeLine className="text-[#0E31AC] text-base shrink-0 mt-0.5" />
              <span>
                Looking for <strong>blood work or immunizations</strong>? Those
                appointments are scheduled under Dr. Paul at our{" "}
                <a
                  href={`#${williamBranch.anchor}`}
                  className="text-[#0E31AC] font-semibold underline hover:text-[#050660]"
                >
                  609 William Street branch
                </a>
                .
              </span>
            </div>
            <SafariBooking
              title={ontarioBranch.leadDoctor.bookingLabel}
              action={ontarioBranch.leadDoctor.bookingUrl}
              className="w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppointmentChoice;
