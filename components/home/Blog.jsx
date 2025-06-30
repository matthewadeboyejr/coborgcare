"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Blog = () => {
  const article = [
    {
      id: 1,
      src: "/nutri.jpg",
      alt: "Blog preview image",
      body: "Understanding your nutritional needs",
    },
    {
      id: 2,
      src: "active.jpg",
      alt: "Blog preview image",
      body: "Tips for staying active",
    },
    {
      id: 3,
      src: "/stress.jpg",
      alt: "Blog preview image",
      body: "Managing stress effectively",
    },
    {
      id: 4,
      src: "/stress.jpg",
      alt: "Blog preview image",
      body: "Managing stress effectively",
    },
  ];

  return (
    <section id="blog" className=" mb-24 ">
      <div className="mb-10 flex flex-col items-center ">
        <p className=" bg-[#EDEEF1] text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
          Health Article
        </p>
        <motion.h3 className="font-semibold text-xl  ">
          Your guide to health
        </motion.h3>
        <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-[#595959] max-w-[600px] mx-auto md:mx-0">
          Explore insightful articles and health tips for everyone.
        </p>
      </div>

      <ul className="flex justify-between md:flex-row flex-col gap-10  overflow-x-auto no-scrollbar">
        {article.map((guide) => (
          <motion.li
            className="bg-[#EDEEF1] rounded-2xl  md:shadow-none shadow-md hover:shadow-md md:min-w-[300px] md:max-w-[300px]  flex-shrink-0"
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
            key={guide?.id}
          >
            <Image
              className="w-full h-48 rounded-t-2xl  object-cover "
              src={guide?.src}
              alt={guide?.alt}
              width={500}
              height={500}
              priority
              unoptimized
            />

            <div className="p-4 space-y-1">
              <p className="text-xs font-semibold">{guide?.body}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
