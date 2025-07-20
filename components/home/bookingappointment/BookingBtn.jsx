"use client";

import React from "react";
import SafariBooking from "./SafariBooking";
import useBrowser from "@/hook/usebrowser";
import Links from "@/components/Links";

const BookingBtn = () => {
  const { isSafari } = useBrowser();

  return (
    <>
      {/*  {isSafari ? (
        <SafariBooking />
      ) : (
        <Links title={"Book Appointment Now"} action="/appointments" />
      )} */}
      <SafariBooking />
    </>
  );
};

export default BookingBtn;
