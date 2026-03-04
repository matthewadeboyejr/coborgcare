"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MdOutlineHealthAndSafety,
    MdVaccines,
    MdMonitorHeart,
    MdBloodtype,
} from "react-icons/md";
import { TbStethoscope } from "react-icons/tb";
import { FaRibbon } from "react-icons/fa6";
import BookingBtn from "./bookingappointment/BookingBtn";

const reminders = [
    {
        id: "pap-smear",
        icon: FaRibbon,
        title: "Pap Smear Screening",
        audience: "Women aged 25–74",
        description:
            "Cervical screening helps detect abnormal cells early. If you're due for your Pap smear, don't delay — book your screening today.",
        gradient: "from-pink-500 to-rose-400",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600",
    },
    {
        id: "prostate",
        icon: TbStethoscope,
        title: "Prostate Check",
        audience: "Men aged 50+",
        description:
            "Prostate screening is recommended for men over 50. A simple check can make a big difference. Book your appointment now.",
        gradient: "from-blue-500 to-indigo-400",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        id: "immunizations",
        icon: MdVaccines,
        title: "Immunizations & Vaccines",
        audience: "All ages",
        description:
            "Stay up-to-date with flu, COVID-19, shingles, and other essential vaccines. Protect yourself and your family.",
        gradient: "from-emerald-500 to-teal-400",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        id: "blood-pressure",
        icon: MdMonitorHeart,
        title: "Blood Pressure & Cholesterol",
        audience: "Adults 18+",
        description:
            "Regular cardiovascular checks help prevent heart disease and stroke. Know your numbers — schedule a check-up.",
        gradient: "from-red-500 to-orange-400",
        bgColor: "bg-red-50",
        iconColor: "text-red-600",
    },
    {
        id: "diabetes",
        icon: MdBloodtype,
        title: "Diabetes Screening",
        audience: "Adults 40+ or at-risk",
        description:
            "Early detection of diabetes can prevent serious complications. If you're at risk, a simple blood test is all it takes.",
        gradient: "from-amber-500 to-yellow-400",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        id: "colorectal",
        icon: MdOutlineHealthAndSafety,
        title: "Colorectal Screening",
        audience: "Adults aged 50–74",
        description:
            "Colorectal cancer screening saves lives through early detection. If you're due, talk to your doctor and book today.",
        gradient: "from-violet-500 to-purple-400",
        bgColor: "bg-violet-50",
        iconColor: "text-violet-600",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const PreventiveHealthReminders = () => {
    return (
        <section className="mb-24">
            {/* Heading */}
            <h2 className="text-4xl md:text-[100px] xl:text-[140px] font-semibold md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
                Preventive Health
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl text-[#595959] max-w-3xl mx-auto mb-12 px-4">
                Staying on top of preventive screenings is one of the best things you
                can do for your health. Are you due for any of these?
            </p>

            {/* Cards Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {reminders.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            className={`relative rounded-3xl ${item.bgColor} overflow-hidden group hover:shadow-xl transition-shadow duration-300`}
                        >
                            {/* Gradient Accent Strip */}
                            <div
                                className={`h-1.5 bg-gradient-to-r ${item.gradient}`}
                            />

                            <div className="p-6 sm:p-8 flex flex-col h-full">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className={`text-3xl ${item.iconColor}`} />
                                </div>

                                {/* Title & Audience */}
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className={`text-sm font-medium ${item.iconColor} mb-3`}>
                                    {item.audience}
                                </p>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6 flex-1">
                                    {item.description}
                                </p>

                                {/* CTA */}
                                <div className="flex">
                                    <BookingBtn title="Book Now" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default PreventiveHealthReminders;
