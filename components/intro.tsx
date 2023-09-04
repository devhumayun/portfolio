"use client"
import Image from "next/image";
import author from "@/public/author.JPG";
import { motion } from 'framer-motion'
import React from "react";
import { BsChevronRight, BsCloudDownload } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
import Link from "next/link";

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
      <motion.p className="text-2xl font-medium !leading-[1.5] mt-5 px-5 sm:text-3xl mb-6"
        initial={{opacity: 0, y:100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Humayun.</span> I'm a
        <span className="font-bold">full-stack developer</span> with
        <span className="font-bold"> 2 years</span> of experience. I enjoy
         building <span className="italic">sites</span>. My focus is
         <span className="underline">React ,(Next.js)</span>
         & Redux
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-3"
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          delay: .1
        }}
      >
        <Link className="group bg-black flex text-white justify-center items-center px-4 py-2 rounded-full gap-2 hover:scale-105 hover:bg-white hover:text-black transition-all" href="#contact">  Contact me 
          <BsChevronRight className="opacity-.5 group-hover:translate-x-1 transition" />
        </Link>
        <a className="group bg-white flex text-black justify-center items-center px-4 py-2 rounded-full gap-2 hover:bg-black hover:text-white hover:scale-105 transition-all" href="/CV.pdf" download={true}>  Download CV 
         <BsCloudDownload className="group-hover:translate-y-1 transition"/>
        </a>
        <div className="flex gap-3">
        <a target="_blank" className="bg-white flex text-black text-xl justify-center items-center p-3 rounded-full gap-2 hover:scale-105 hover:bg-black hover:text-white transition-all" href="https://www.linkedin.com/in/humayun94/"><BiLogoLinkedin /></a>
        <a target="_black" className="bg-white flex text-black text-xl justify-center items-center p-3 rounded-full gap-2 hover:scale-105 hover:bg-black hover:text-white transition-all" href="https://github.com/devhumayun"><AiOutlineGithub /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
