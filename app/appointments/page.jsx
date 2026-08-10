import AppointmentChoice from "@/components/home/bookingappointment/AppointmentChoice";
import OceanBooking from "@/components/home/bookingappointment/OceanBooking";
import Kiosks from "@/components/home/kiosks";
import UninsuredServicesSection from "@/components/UninsuredServicesSection";
import React from "react";

const appointments = () => {
  return (
    <div className="mt-24">
      <AppointmentChoice />
      <UninsuredServicesSection titleTag="h2" />
      <Kiosks />
    </div>
  );
};

export default appointments;
