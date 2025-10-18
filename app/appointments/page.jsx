import AppointmentChoice from "@/components/home/bookingappointment/AppointmentChoice";
import OceanBooking from "@/components/home/bookingappointment/OceanBooking";
import Kiosks from "@/components/home/kiosks";
import React from "react";

const appointments = () => {
  return (
    <div className="mt-24">
      <AppointmentChoice />
      <Kiosks />
    </div>
  );
};

export default appointments;
