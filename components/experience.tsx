"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
import { experiencesData } from '@/libs/data';
import { useSectionInView } from '@/libs/hooks';
import { useThemeContext } from '@/context/theme-context';

const Experience = () => {
  const { ref } = useSectionInView("Experience")
  const { theme } = useThemeContext()
  return (
    <section ref={ref} id="experience" className="scroll-mt-[10rem] max-w-[55rem] text-center mb-24">
      <SectionHeading> Experience </SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{ 
                 background:
                 theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.5)",
                 color: theme === "light" ?"#333" : "#fff",
                 textAlign:"left",
                 padding:"1.2rem 2rem"  
                }}
              contentArrowStyle={{
                borderRight: theme === "light" ? ".3rem solid #CEC9E2" : ".3rem solid rgba(255, 255, 255 , .50)",
              }}
              icon={item.icon}
              iconStyle={{ background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.5)",fontSize:"1.5rem" }}
            >
              <h3 className='font-semibold'>{item.title}</h3>
              {/* <p>{item.location}</p> */}
              <p className='dark:text-white/80'>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default  Experience