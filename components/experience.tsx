"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
import { experiencesData } from '@/libs/data';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-[10rem] max-w-[55rem] text-center">
      <SectionHeading> Experience </SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{ 
                background: "#f3f4f6",
                 color: "#333",
                 textAlign:"left",
                 padding:"1.2rem 2rem"  
                }}
              contentArrowStyle={{
                borderRight: ".3rem solid #CEC9E2",
              }}
              icon={item.icon}
              iconStyle={{ background: "white", fontSize:"1.5rem" }}
            >
              <h3 className='font-semibold'>{item.title}</h3>
              {/* <p>{item.location}</p> */}
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default  Experience