import React from "react";

const Btn = ({ action, title }) => {
  return (
    <button className="bg-primary-color px-6 py-3 sm:px-6 sm:py-4 rounded-full text-white hover:bg-[#0a2477] transition-colors duration-300 text-sm sm:text-base font-medium">
      {title}
    </button>
  );
};

export default Btn;
