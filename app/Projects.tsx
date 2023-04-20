"use client"
import { Project } from '@/typing';
import React from 'react'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';


type Props = {
    projects:Project[];
}

function Projects({projects}:Props) {
  return (
    <div
     className='h-screen relative flex flex-col items-center justify-center'>
        <motion.h1
          initial={{ x:-100 }}
          whileInView={{x:0}}
          transition={{
              duration:1.5
          }}
          className='uppercase p-14 tracking-[15px] font-extrabold text-gray-400 animate-pulse text-2xl'>projects</motion.h1>
            <motion.div
              initial={{ x:100 }}
              whileInView={{x:0}}
              transition={{
                  duration:1.5
              }}
            >
              {
                  projects.map((project)=>(
                      <ProjectCard key={project._id} project={project}/>
                  ))
              }
            </motion.div>
            <div><ArrowDownCircleIcon className='absolute text-yellow-500 bottom-10 h-10 animate-bounce w-10' /></div>
    </div>
  )
}

export default Projects;