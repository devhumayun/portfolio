"use client"
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/libs/hooks'

const About = () => {
  const {ref} = useSectionInView("About", 0.80)
  return (
    <motion.section ref={ref} id='about' className='max-w-[45rem] text-center scroll-mt-[10rem]'
        initial={{ opacity: 0 , y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{
            delay: 0.175
        }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='text-[1.1rem] leading-[2rem]'> I'm Md Humayun Kabir. I'm a <span className='font-bold text-[#6e5cb8] italic'> full stack professional Web Developer </span>. As a dedicated MERN stack developer, I am deeply passionate about crafting remarkable web applications that seamlessly integrate <span className='underline text-[#6e5cb8] cursor-pointer'>MongoDB</span> for efficient data storage, <span className='underline text-[#6e5cb8] cursor-pointer'>Express.js</span> to construct powerful backend systems, and <span className='underline text-[#6e5cb8] cursor-pointer'>React</span> along with <span className='underline text-[#6e5cb8] cursor-pointer'>Next.js</span> to create dynamic and captivating user interfaces. With <span className='underline text-[#6e5cb8] cursor-pointer'>Node.js</span>, I orchestrate the server-side functionality, ensuring smooth interactions between the different components. My expertise ranges from creating robust <span className='underline text-[#6e5cb8] cursor-pointer'>APIs</span> and managing databases to designing intuitive user interfaces that offer exceptional user experiences. This technology combination enables me to create full-stack applications that efficiently handle data flow and user interactions, resulting in modern and feature-rich web experiences. </p>
        
    </motion.section>
  )
}

export default About
