import { Lightbulb } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SkillsCard = ({skills}) => {

  return (
    <div className='px-2 py-2 bg-[#191919] text-white rounded-lg flex items-center z-0 justify-start mb-3'>
      
      <Image
      width={20}
      height={20}
      src={skills.url}
      />
      <h2 className='ml-2'>{skills.titel}</h2>
    </div>
  )
}

export default SkillsCard