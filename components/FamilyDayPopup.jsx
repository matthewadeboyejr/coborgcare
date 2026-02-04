"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdFamilyRestroom } from "react-icons/md";

const FamilyDayPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the popup has been shown in this session
        const hasSeenPopup = sessionStorage.getItem("hasSeenFamilyDayPopup");
        if (!hasSeenPopup) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenFamilyDayPopup", "true");
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
                        {/* Header / Gradient Bg */}
                        <div className="relative p-8 text-center bg-gradient-to-br from-[#0E31AC] to-[#2bd9fe] overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center text-white">
                                <div className="p-3 mb-4 bg-white/20 backdrop-blur-md rounded-full shadow-inner">
                                    <MdFamilyRestroom className="text-4xl" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold drop-shadow-md">
                                    Happy Family Day!
                                </h2>
                                <p className="mt-2 text-blue-50 font-medium text-lg">
                                    Holiday Hours Notice
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
                        <div className="p-8 text-center bg-white">
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Please be advised that our clinic will be closed on
                                <br />
                                <span className="font-bold text-[#0E31AC]">
                                    February 14th & 16th
                                </span>
                                <br />
                                to observe Family Day.
                            </p>

                            <p className="text-sm text-gray-500 mb-8">
                                We wish you and your loved ones a wonderful holiday weekend!
                            </p>

                            <button
                                onClick={handleClose}
                                className="w-full py-3.5 px-6 font-semibold text-white bg-[#0E31AC] hover:bg-[#0a2480] rounded-xl shadow-lg shadow-blue-900/20 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Got It, Thanks!
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FamilyDayPopup;
