"use client"
import { urlFor } from '@/sanity';
import { Skill } from '@/typing';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    skills:Skill[];
}

function Skills({skills}:Props) {
  return (
    <div
     className='h-screen relative flex flex-col items-center justify-center '>
        <h1
        
        
         className='uppercase pb-4 sm:m-10 tracking-[15px] font-extrabold text-gray-400 animate-pulse text-2xl'>skills</h1>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-7 lg:gap-2 sm:grid-cols-4 sm:gap-4 items-center justify-center'>
        {
            skills.map((skill)=>(
                <div className='p-2 sm:p-5 animate-pulse' key={skill._id}>
                    <motion.img 
                        initial={{ x:-100 }}
                        whileInView={{x:0}}
                        transition={{
                            duration:1.5
                        }}
                        src={urlFor(skill.image).url()} 
                        className='sm:h-10 sm:w-12 h-6 w-8' />
                    <motion.h1
                        initial={{ x:100 }}
                        whileInView={{x:0}}
                        transition={{
                            duration:1.5
                        }}
                     className='uppercase font-bold'>{skill.title}</motion.h1>
                </div>
            ))
        }
        </div>
        <div><ArrowDownCircleIcon className='absolute text-yellow-500 bottom-10 h-10 animate-bounce w-10' /></div>
    </div>
  )
}

export default Skills;