import { urlFor } from '@/sanity';
import { Skill } from '@/typing';
import React from 'react'

type Props = {
    skills:Skill[];
}

function Skills({skills}:Props) {
  return (
    <div className='h-screen relative flex flex-col items-center justify-center snap-y snap-mandatory '>
        <h1 className='uppercase pb-4 tracking-[15px] font-extrabold text-gray-400 animate-pulse text-2xl'>skills</h1>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-7 lg:gap-2 sm:grid-cols-4 sm:gap-4 items-center justify-center'>
        {
            skills.map((skill)=>(
                <div className='p-2 sm:p-5 animate-pulse' key={skill._id}>
                    <img src={urlFor(skill.image).url()} className='sm:h-10 sm:w-12 h-6 w-8' />
                    <h1 className='uppercase font-bold'>{skill.title}</h1>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Skills;