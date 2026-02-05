"use client";

import React, { useState } from "react";
import { MdNotificationsNone, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Notice = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full mb-8"
            >
                <div className="relative bg-white/80 backdrop-blur-md border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden p-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />

                    <div className="flex items-start sm:items-center gap-4 p-4 sm:p-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <MdNotificationsNone className="text-2xl" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-gray-900 font-bold text-lg leading-tight">
                                Family Day Notice
                            </h3>
                            <p className="text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
                                We will be closed on <span className="font-semibold text-blue-600">February 14th</span> and <span className="font-semibold text-blue-600">16th</span>.
                            </p>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                            aria-label="Dismiss notice"
                        >
                            <MdClose className="text-xl" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Notice;
