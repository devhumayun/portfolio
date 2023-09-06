"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/libs/data";
import Image from "next/image";
import { useSectionInView } from "@/libs/hooks";

type ProjectProps = {
  title: String;
  desicription: String;
  imageUrl: String;
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
    ref={ref} 
      className="max-w-[45rem] text-center scroll-mt-[10rem] mb-24"
      id="projects"
    >
      <SectionHeading> My Projects </SectionHeading>
      {projectsData.map((data, index) => (
        <>
          <div className="group bg-gray-100 max-w-[43rem] flex mb-7 last:mb-0 overflow-hidden relative sm:h-[20rem] rounded-sm hover:bg-gray-200 transition shadow border dark:bg-white/10 dark:rounded-sm dark:border-opacity-5 dark:border-black/5" >
            <div className="pt-10 pl-5 pb-6 flex flex-col h-full sm:max-w-[50%] sm:group-even:ml-[20rem]">
              <h3 className="font-semibold mb-2 text-left dark:text-white dark:font-bold">{data.title}</h3>
              <span className="text-left dark:text-white/70">{data.description}</span>
              <ul className="flex gap-2 flex-wrap sm:mt-auto">
                {data.tags.map((tag, index) => (
                  <li
                    className="bg-black/[.8] text-white py-2 px-2 rounded text-[1rem] hover:bg-white hover:text-black transition cursor-pointer dark:bg-white/10 dark:hover:bg-white/80"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={data.imageUrl}
              alt="My recent worked"
              quality={95}
              className="absolute bottom-0 hidden sm:block w-[28.25rem] -right-40 rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40
                            group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-2 group:hover:scale-[1.4] group-even:group-hover:translate-x-1 group-even:group-hover:translate-y-1 group-even:group-hover:rotate-2
                            "
            />
          </div>
        </>
      ))}
    </section>
  );
};

export default Projects;
