"use client"

import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import SectionHeading from './section-heading'
import { projectsData } from '@/libs/data'
import Image from 'next/image'

type ProjectProps = {
    title: String,
    desicription: String,
    imageUrl: String
}

const Projects = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["0 1", "1.33 1"],
    })
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
    <motion.div
        ref={ref}
        style={{
            scale: scaleProgess ,
            opacity: opacityProgess 
        }}
    >
    <section className='max-w-[45rem] text-center'>
        <SectionHeading> My Projects </SectionHeading>
        {
            projectsData.map((data,index) => 
                <>
                    <div className='group bg-gray-100 max-w-[43rem] flex mb-7 last:mb-0 overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition shadow border'>
                        <div className='pt-10 pl-5 pb-6 flex flex-col h-full sm:max-w-[50%] sm:group-even:ml-[20rem]'>
                            <h3 className='font-semibold mb-2 text-left'>{data.title}</h3>
                            <span className='text-left'>{data.description}</span>
                            <ul className='flex gap-2 flex-wrap sm:mt-auto'>
                                {data.tags.map((tag,index) => 
                                    <li className='bg-black/[.8] text-white py-2 px-2 rounded text-[1rem] hover:bg-white hover:text-black transition cursor-pointer' key={index}>
                                        {tag}
                                    </li>
                               )}
                            </ul>
                        </div>
                        <Image 
                            src={data.imageUrl}
                            alt='My recent worked'
                            quality={95}
                            className='absolute bottom-0 hidden sm:block w-[28.25rem] -right-40 rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40
                            group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-2 group:hover:scale-[1.4] group-even:group-hover:translate-x-1 group-even:group-hover:translate-y-1 group-even:group-hover:rotate-2
                            '

                        />
                    </div>
                </>
            )
        }
    </section>
    </motion.div>
  )
}

export default Projects
