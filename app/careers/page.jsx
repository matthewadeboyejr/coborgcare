"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineHealthAndSafety, MdWorkOutline, MdPeopleOutline, MdCheckCircleOutline } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa6";
import Links from "@/components/Links";

const CareersPage = () => {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                >
                    Join Our <span className="text-[#0B95C7]">Team</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                    Help us transform healthcare in Cobourg. We are looking for compassionate, dedicated professionals to join our family-oriented clinic.
                </motion.p>
            </section>

            {/* Current Openings */}
            <section>
                <div className="bg-[#0B95C7]/5 rounded-[40px] p-8 md:p-16 border border-[#0B95C7]/10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#050660] text-sm font-semibold shadow-sm border border-gray-100">
                                <MdWorkOutline className="text-lg" />
                                <span>Immediate Opening</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-bold">Family <span className="text-[#0B95C7]">Physician</span></h2>
                            
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We are seeking a passionate Family Physician to join our rostered clinic. At Cobourg Care, you'll find a supportive environment, modern facilities, and a dedicated patient population.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Supportive Team Environment",
                                    "Modern Medical Facility",
                                    "Competitive Compensation",
                                    "Work-Life Balance",
                                    "Dedicated Patient Base",
                                    "FHO/FHT Opportunities"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <MdCheckCircleOutline className="text-[#050660] text-xl shrink-0" />
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <a 
                                    href="mailto:cobourgcareclinic@gmail.com" 
                                    className="inline-block bg-[#050660] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0a2480] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                                >
                                    Apply for this Position
                                </a>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/group-team.jpg"
                                    alt="Medical team collaborating"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                            <FaStethoscope className="text-2xl" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Work with the best</p>
                                            <p className="text-sm text-blue-50">Join Dr. Usman and the team</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <MdOutlineHealthAndSafety />,
                        title: "Focus on Care",
                        desc: "We prioritize patient outcomes and quality of care above all else, ensuring time for meaningful interactions."
                    },
                    {
                        icon: <MdPeopleOutline />,
                        title: "Community Driven",
                        desc: "Serving the Cobourg community means building relationships that last generations."
                    },
                    {
                        icon: <MdWorkOutline />,
                        title: "Professional Growth",
                        desc: "Collaborate with experienced physicians and access resources to stay at the forefront of medical practice."
                    }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[32px] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col items-center text-center space-y-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#050660]/10 flex items-center justify-center text-[#050660] text-3xl">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="bg-[#050660] text-white rounded-[40px] p-12 md:p-20 text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold">Ready to make a <span className="text-[#0B95C7]">difference?</span></h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Even if you don't see a perfect fit, we're always looking for exceptional people. Send us your resume and let's talk.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href="mailto:cobourgcareclinic@gmail.com" 
                        className="bg-white text-[#050660] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
                    >
                        Send Resume
                    </a>
                    <Links action="/contact-us" title="Contact Us" />
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
