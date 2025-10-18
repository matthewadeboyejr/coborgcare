import React from "react";

const SafariBooking = ({
  title = "Book Appointment Now",
  action = "https://ocean.cognisantmd.com/online-booking/e98fec3a-48b6-4f68-a13a-b22d9af268bc",
}) => {
  return (
    <a
      href={action}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary-color px-6 py-3 sm:px-6 sm:py-4 rounded-full text-white hover:bg-[#0a2477] transition-colors duration-300 text-sm sm:text-base font-medium "
    >
      {title}
    </a>
  );
};

export default SafariBooking;
