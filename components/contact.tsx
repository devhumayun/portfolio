"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/libs/hooks'
import { BiSolidPaperPlane } from 'react-icons/bi'

const Contact = () => {
    const { ref } = useSectionInView("Contact")
  return (
    <motion.section ref={ref} id="contact" className='scroll-mt-[10rem] mb-24 w-[min(100%, 40rem)] text-center' 
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once:true
      }}
    >
        <SectionHeading> Contact me </SectionHeading>
        <p className='-mt-8 mb-10'> Please click here: <a className='underline' href="mailto: humayunkabir9408@gmail.com">info@gmail.com</a> for quick response. </p>
        <form action="">
            <input className='group h-12 px-3 w-full mb-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-950' type="text" placeholder='Type your email'/>
            <textarea placeholder='Type your message' className='px-3 py-2 w-full mb-4 border border-gray-200 rounded-lg h-32 focus:outline-none focus:border-gray-950' />
            <button className='group flex justify-center items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:scale-105 hover:bg-gray-950 transition' type='submit'> Submit 
              <BiSolidPaperPlane className="group-hover: translate-x-1 group-hover:-translate-y-1 transition" />
            </button>
        </form>
    </motion.section>
  )
}

export default Contact
