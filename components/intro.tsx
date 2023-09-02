"use client"
import Image from "next/image";
import author from "@/public/author.JPG";
import { motion } from 'framer-motion'
import React from "react";

const Intro = () => {
  return (
    <section className="max-w-[45rem] text-center mb-24 sm:mb-0">
      <div className="flex justify-center items-center ">
        <div className="relative">
          <motion.div
            initial={{opacity: 0, scale:0}}
            animate={{opacity: 1, scale:1}}
            transition={{
                type:"tween",
                duration: 0.3
            }}
          >
            <Image
              src={author}
              alt="Humayun Kabir"
              height="192"
              width="192"
              priority={true}
              className="w-24 h-24 object-cover rounded-full border-[.3rem] border-white "
            />
          </motion.div>
            <motion.span className="text-3xl absolute bottom-0 right-0"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type:"spring",
                    stiffness:120,
                    delay: 0.1,
                    duration: 0.5
                }}
            > 👍 
            </motion.span>
        </div>
      </div>
      <motion.p className="text-2xl font-medium !leading-[1.5] mt-5 px-5 sm:text-3xl"
        initial={{opacity: 0, y:100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
         building <span className="italic">sites & apps</span>. My focus is{" "}
         <span className="underline">React (Next.js)</span>.
      </motion.p>
    </section>
  );
};

export default Intro;
