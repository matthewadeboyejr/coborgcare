import OceanBooking from "@/components/home/bookingappointment/OceanBooking";
import ZohoBooking from "@/components/home/bookingappointment/ZohoBooking";
import React from "react";
import Marquee from "react-fast-marquee";

const appointments = () => {
  return (
    <div className="mt-24">
      <OceanBooking />
    </div>
  );
};

export default appointments;
