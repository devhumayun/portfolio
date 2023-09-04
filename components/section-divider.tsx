"use client"
import { motion } from 'framer-motion'
import React from 'react'

const SectionDivider = () => {
  return (
    <motion.div className='bg-slate-400 h-24 w-[.4rem] rounded-full my-24'
        initial={{opacity: 0, y:100}}
        animate={{opacity: 1, y: 0 }}
        transition={{
            delay: .125
        }}
    >
      
    </motion.div>
  )
}

export default SectionDivider
