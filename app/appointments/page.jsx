import OceanBooking from "@/components/home/bookingappointment/OceanBooking";
import Kiosks from "@/components/home/kiosks";
import React from "react";

const appointments = () => {
  return (
    <div className="mt-24">
      <OceanBooking />
      <Kiosks />
    </div>
  );
};

export default appointments;
