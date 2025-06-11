import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const MarqueeService = () => {
  const services = [
    { id: 1, name: "  Comprehensive medical care" },
    { id: 2, name: "Minor surgery" },
    { id: 3, name: "Walk in clinic" },
    { id: 4, name: "Pap test" },
    { id: 5, name: "Immunisation" },
    { id: 6, name: "IUD insertion" },
  ];
  return (
    <section className="mb-24">
      <ul className=" bg-secondary-color py-7 rounded-full text-white ">
        <Marquee>
          {services.map((service) => {
            return (
              <li className="flex items-center gap-5 pr-10">
                <GoDotFill />
                <p className="text-3xl font-normal">{service?.name}</p>
              </li>
            );
          })}
        </Marquee>
      </ul>
    </section>
  );
};

export default MarqueeService;
