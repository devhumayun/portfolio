"use client";
import { skillsData } from "@/libs/data";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/libs/hooks";

const Skill = () => {
  
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-[10rem] mb-24 max-w-[45rem] text-center"
    >
      <SectionHeading> My Skills </SectionHeading>
      <ul className="flex flex-wrap justify-center text-sm font-bold gap-3">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white font-blod border-black/[.1] px-4 py-3 rounded-xl shadow-sm dark:text-black/90 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once:true
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
