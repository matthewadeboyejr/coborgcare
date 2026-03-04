"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdVaccines, MdMonitorHeart, MdBloodtype } from "react-icons/md";
import { TbStethoscope } from "react-icons/tb";
import { FaRibbon } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Link from "next/link";

const highlights = [
    { icon: FaRibbon, label: "Pap Smear Screening", color: "text-pink-500" },
    { icon: TbStethoscope, label: "Prostate Check", color: "text-blue-500" },
    { icon: MdVaccines, label: "Immunizations & Vaccines", color: "text-emerald-500" },
    { icon: MdMonitorHeart, label: "Blood Pressure & Cholesterol", color: "text-red-500" },
    { icon: MdBloodtype, label: "Diabetes Screening", color: "text-amber-500" },
    { icon: MdOutlineHealthAndSafety, label: "Colorectal Screening", color: "text-violet-500" },
];

const PreventiveHealthPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem("hasSeenPreventiveHealthPopup");
        if (!hasSeenPopup) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenPreventiveHealthPopup", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl"
                    >
                        {/* Header */}
                        <div className="relative p-8 text-center bg-gradient-to-br from-[#0E31AC] to-[#0B95C7] overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center text-white">
                                <div className="p-3 mb-4 bg-white/20 backdrop-blur-md rounded-full shadow-inner">
                                    <MdOutlineHealthAndSafety className="text-4xl" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold drop-shadow-md">
                                    Preventive Health Reminder
                                </h2>
                                <p className="mt-2 text-blue-100 font-medium text-base sm:text-lg">
                                    Are you due for a check-up?
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                            >
                                <MdClose className="text-xl" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 bg-white">
                            <p className="text-gray-600 text-center text-sm sm:text-base mb-5 leading-relaxed">
                                Staying on top of preventive screenings can save your life.
                                Check if you&apos;re due for any of these:
                            </p>

                            {/* Screening Items */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {highlights.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <Icon className={`text-2xl ${item.color} shrink-0`} />
                                            <span className="text-sm font-medium text-gray-700">
                                                {item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                                <Link
                                    href="/appointments"
                                    onClick={handleClose}
                                    className="block w-full py-3.5 px-6 font-semibold text-center text-white bg-[#0E31AC] hover:bg-[#0a2480] rounded-xl shadow-lg shadow-blue-900/20 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Book a Screening Now
                                </Link>
                                <button
                                    onClick={handleClose}
                                    className="w-full py-3 px-6 font-medium text-gray-500 hover:text-gray-700 transition-colors text-sm"
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

export default PreventiveHealthPopup;
