"use client";
import React, { useRef, useState } from "react";
import { FaAt, FaFax, FaLocationArrow, FaPhone } from "react-icons/fa";
import Map from "@/components/home/Map";
import emailjs from "@emailjs/browser";
import { CLINIC_BRANCHES, CLINIC_CONTACT } from "@/data/clinicLocations";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const businessTemplateID = process.env.NEXT_PUBLIC_BUSINESS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  //const clientTemplateID = process.env.NEXT_PUBLIC_CLIENT_TEMPLATE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      name,
      email,
      phone,
      booked_date: new Date().toLocaleString(),
      message,
      timestamp: Date.now(),
    };

    try {
      if (!serviceID || !businessTemplateID || !publicKey) {
        throw new Error("Email service credentials are missing");
      }
      const response = await emailjs.send(
        serviceID,
        businessTemplateID,
        formData,
        publicKey
      );

      console.log(response);
      if (response.status === 200) {
        setSubmitStatus("success");
        formRef.current.reset();
      } else {
        console.error("EmailJS failed response:", response);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <>
      <section className="w-full mb-16 md:mb-24 mt-7 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <h1 className="text-5xl   md:text-[140px] xl:text-[210px] font-semibold  md:font-medium  w-full text-center leading-tight sm:leading-snug md:leading-normal">
          Contact Us
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 w-full max-w-7xl mx-auto mt-8 md:mt-16">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaAt className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a
                    href={`mailto:${CLINIC_CONTACT.email}`}
                    className="text-[#595959] hover:text-primary-color transition-colors"
                  >
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <a
                    href={`tel:+1${CLINIC_CONTACT.phone}`}
                    className="text-[#595959] hover:text-primary-color transition-colors"
                  >
                    {CLINIC_CONTACT.phoneFormatted}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaFax className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Fax</h3>
                  <span className="text-[#595959]">{CLINIC_CONTACT.fax}</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaLocationArrow className="text-lg" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">Our Two Locations</h3>
                  <div className="space-y-3">
                    {CLINIC_BRANCHES.map((branch) => (
                      <div
                        key={branch.id}
                        className="bg-white rounded-2xl p-4 border border-gray-200 space-y-1"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-semibold text-[#050660]">
                            {branch.shortAddress}
                          </p>
                          {branch.acceptingNewPatients && (
                            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                              Accepting New Patients
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#595959]">
                          {branch.fullAddress}
                        </p>
                        <p className="text-xs text-[#0E31AC] font-medium">
                          Physician: {branch.leadDoctor.name}
                        </p>
                        <p className="text-xs text-[#595959]">
                          {branch.hours.weekday} &bull; {branch.hours.saturday}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="w-full">
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="border w-full rounded-full px-5 py-3 md:py-4 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="border w-full rounded-full px-5 py-3 md:py-4 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="border w-full rounded-full px-5 py-3 md:py-4 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  rows={5}
                  className="border w-full rounded-3xl px-5 py-3 border-black/10 focus:outline-none focus:ring-2 focus:ring-primary-color/50"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                  Thanks! We've received your request and will get back to you
                  shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-color px-6 py-3 sm:px-6 sm:py-4 rounded-full text-white hover:bg-[#0a2477] transition-colors duration-300 text-sm sm:text-base font-medium w-full md:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
};

export default ContactUs;
