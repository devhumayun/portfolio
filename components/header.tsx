"use client"
import { links } from '@/libs/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

const Header = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 translate-x-[-50%] left-1/2 h-[4.5rem]  w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg/[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial = {{y:-100, x:"-50%", opacity:0}}
        animate = {{y:0,  x:"-50%", opacity:1}}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.6rem] sm:h-[initial] sm:py-0">
           <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[o.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-6 dark:text-white/95'>
            {
                links.map((link) => 
                    <motion.li key={link.hash} className='h-3/4 flex items-center justify-center relative'
                    initial={{y:-100, opacity:0}}
                    animate={{y:0, opacity:1}}
                    >
                        <Link href={link.hash} className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-white/70',{
                          "text-gray-950 dark:text-white/70 dark:rounded-full": activeSection === link.name
                        })}
                        onClick={
                          () => {
                            setActiveSection(link.name)
                            setTimeOfLastClick(Date.now)
                          }}
                        >
                          {link.name}
                            {link.name == activeSection && <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-white/10'
                              layoutId="activeSection"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                              }}

                            ></motion.span>}
                          </Link>
                    </motion.li>
                )
            }
           </ul>
        </nav>
    </header>
  )
}



export default Header







// bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75