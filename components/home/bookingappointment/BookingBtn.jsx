"use client";

import React from "react";
import Links from "@/components/Links";

const BookingBtn = ({
  title = "Book Appointment Now",
  action = "/appointments",
}) => {
  return <Links title={title} action={action} />;
};

export default BookingBtn;
