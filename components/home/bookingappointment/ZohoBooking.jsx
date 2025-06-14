import React from "react";

const ZohoBooking = () => {
  return (
    <section className="bg-[#F7F8FC] rounded-2xl p-6 mb-24">
      <h2 className="text-5xl  md:text-[140px] xl:text-[210px] font-semibold md:font-medium w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Appointment.
      </h2>
      <iframe
        width="100%"
        height="600"
        src="https://coborgcareclincs.zohobookings.com/portal-embed#/coborgcareclincs"
        frameborder="0"
        scrolling="auto"
        allowfullscreen=""
      />{" "}
    </section>
  );
};

export default ZohoBooking;
