import React, { ReactNode } from 'react'
type SecionHeadingProps = {
    children: React.ReactNode
}
const SectionHeading = ({children}: SecionHeadingProps) => {
  return (
    <h2 className='text-3xl font-bold mb-6 capitalize'> {children} </h2>
  )
}

export default SectionHeading
