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
import { FaRibbon, FaHeartPulse } from "react-icons/fa6";
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
        audience: "Adults 40+ (essential)",
        description:
            "If you're over 40, regular blood pressure and cholesterol checks are essential to prevent heart disease and stroke. Know your numbers — schedule a check-up.",
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
            <p className="text-center text-base sm:text-lg md:text-xl text-[#595959] max-w-3xl mx-auto mb-8 px-4">
                Staying on top of preventive screenings is one of the best things you
                can do for your health. Are you due for any of these?
            </p>

            {/* Over 40 Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto mb-12 px-4"
            >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0E31AC] to-[#0B95C7] p-5 sm:p-6 text-white shadow-lg">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="relative z-10 flex items-start gap-4">
                        <div className="p-2.5 bg-white/20 rounded-xl shrink-0 mt-0.5">
                            <FaHeartPulse className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-1">
                                Over 40? These checks are for you.
                            </h3>
                            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                                Adults over 40 are recommended to regularly check their
                                <strong className="text-white"> cholesterol</strong>,
                                <strong className="text-white"> blood pressure</strong>,
                                <strong className="text-white"> prostate health</strong> (men), and
                                <strong className="text-white"> blood glucose levels</strong>.
                                Early detection is key — book your preventive check-up today.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

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
