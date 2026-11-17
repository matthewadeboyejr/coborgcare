"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdLocationOn, MdPersonAddAlt1, MdCheckCircle } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC_BRANCHES, NEW_PATIENT_BOOKING_URL } from "@/data/clinicLocations";

const STORAGE_KEY = "hasSeenNewPatientPopup";

const NewPatientPopup = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isTargetRoute = pathname === "/" || pathname === "/appointments";

  useEffect(() => {
    if (!isTargetRoute) {
      setIsVisible(false);
      return;
    }

    const hasSeenPopup = sessionStorage.getItem(STORAGE_KEY);
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 900);
      return () => clearTimeout(timer);
    }
  }, [isTargetRoute]);

  useEffect(() => {
    if (!isVisible) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isTargetRoute) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-patient-popup-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="relative w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden bg-white rounded-3xl shadow-2xl"
          >
            {/* Header */}
            <div className="relative p-6 sm:p-8 text-center bg-gradient-to-br from-[#050660] via-[#0E31AC] to-[#0B95C7] overflow-hidden shrink-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

              <div className="relative z-10 flex flex-col items-center justify-center text-white space-y-2.5">
                <span className="inline-flex items-center gap-1.5 bg-emerald-400/20 border border-emerald-300/40 text-emerald-100 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                  <MdPersonAddAlt1 className="text-sm" />
                  Two Locations • Expanded Access
                </span>
                <h2
                  id="new-patient-popup-title"
                  className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md leading-snug"
                >
                  WE ARE ACCEPTING NEW FAMILY PRACTICE PATIENTS!
                </h2>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close announcement"
                className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7 bg-white overflow-y-auto space-y-5">
              <p className="text-gray-700 text-center text-sm sm:text-base leading-relaxed">
                <strong className="text-[#050660]">
                  Dr. Sunday
                </strong>
                , our newest Family Physician, is now accepting new patients at
                our{" "}
                <strong className="text-[#050660]">
                  628 Ontario Street, Cobourg
                </strong>{" "}
                location.
              </p>

              {/* Walk-in banner & both branches */}
              <div className="p-4 rounded-2xl bg-[#0B95C7]/10 border border-[#0B95C7]/25 space-y-3">
                <div className="flex items-center justify-center gap-2 text-[#050660] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <MdCheckCircle className="text-emerald-600 text-lg shrink-0" />
                  <span>Walk-In Patients Welcome at Both Locations!</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {CLINIC_BRANCHES.slice()
                    .reverse()
                    .map((branch) => (
                      <div
                        key={branch.id}
                        className="flex items-start gap-2.5 bg-white/80 rounded-xl p-2.5 border border-gray-100"
                      >
                        <MdLocationOn className="text-[#0E31AC] text-lg shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#050660]">
                            {branch.shortAddress}, Cobourg
                            {branch.acceptingNewPatients && (
                              <span className="ml-2 inline-block bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full align-middle">
                                Accepting New Patients
                              </span>
                            )}
                          </p>
                          <p className="text-gray-600">
                            {branch.leadDoctor.name}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={NEW_PATIENT_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block w-full py-3.5 px-6 font-semibold text-center text-white bg-[#050660] hover:bg-[#0a2480] rounded-full shadow-lg shadow-blue-900/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base"
                >
                  Register / Book at 628 Ontario St
                </a>

                {pathname === "/" ? (
                  <Link
                    href="/appointments"
                    onClick={handleClose}
                    className="block w-full py-3 px-6 font-semibold text-center text-[#0E31AC] bg-[#0B95C7]/10 hover:bg-[#0B95C7]/20 rounded-full transition-colors text-sm"
                  >
                    Choose Between Both Locations
                  </Link>
                ) : (
                  <a
                    href="#booking-branches"
                    onClick={handleClose}
                    className="block w-full py-3 px-6 font-semibold text-center text-[#0E31AC] bg-[#0B95C7]/10 hover:bg-[#0B95C7]/20 rounded-full transition-colors text-sm"
                  >
                    Compare Both Locations Below
                  </a>
                )}

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-2 px-6 font-medium text-gray-500 hover:text-gray-700 transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewPatientPopup;

