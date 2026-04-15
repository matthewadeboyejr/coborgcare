"use client";

import React from "react";
import Links from "@/components/Links";

const BookingBtn = ({
  title = "Book Appointment Now",
  action = "/appointments",
  className = "",
}) => {
  return <Links title={title} action={action} className={className} />;
};

export default BookingBtn;
