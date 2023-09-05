import React, {useEffect} from 'react'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './type'

export const useSectionInView = (sectionName: SectionName, threshold = .75) => {
    const [ref, inView] = useInView({
        threshold:threshold
      })
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
      useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection(sectionName)
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName])

    return {
        ref
    }
}