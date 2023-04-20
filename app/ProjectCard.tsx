"use client"
import { urlFor } from '@/sanity';
import { Project } from '@/typing';
import React from 'react'
import { RssIcon } from '@heroicons/react/24/solid';
import { RocketLaunchIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';
type Props = {
    project : Project;
}

function ProjectCard({project}:Props) {
  return (
    <div
     className='flex text-violet-50 p-5 shadow-lg flex-col bg-[#222831] items-center justify-center'>
    <div className='flex flex-row space-x-10 justify-between'>
      <h1 className='text-center underline pb-2 font-bold md:text-2xl lg:pb-4 md:tracking-[10px]'>{project.title}</h1>
      <button className='flex bg-violet-50 space-x-2 sm:h-7 cursor-pointer rounded-full h-5 px-4'>
        <span className='text-xs sm:text-xl text-[#222831] animate-pulse'>LIVE</span>
        <RocketLaunchIcon className="h-3 w-3 sm:h-6 sm:w-6 cursor-pointer animate-pulse text-[#222831]" />
      </button>
    </div>
    <div className='flex md:pt-4 flex-col md:flex-row align-middle rounded-md items-center justify-center'>
        <div className='lg:p-5 pb-2 md:p-2'><img className=' h-[120px] w-[170px] sm:w-[320px] sm:h-[150px] md:w-[280px] lg:h-[220px] lg:w-[300px] xl:w-[400px]' src={urlFor(project?.image).url()} /></div>
        <div className='lg:flex-1 w-[300px] sm:w-[450px] md:w-[380px] lg:w-[500px] xl:w-[700px]'>
          {project.points.map((point,i)=>(
            <p key={i} className='text-left text-xs lg:text-base'>{point}</p>
          ))}
        </div>
      </div>
            <div className='flex flex-row'>
              {
                project.technologies.map((tech)=>(
                  <div className='md:px-8 p-1 animate-pulse' key={tech._id}>
                    <img src={urlFor(tech.image).url()} className='md:h-10 md:w-12 h-6 w-8' />
                    <p className='text-left text-xs lg:text-xl' >{tech.title}</p>
                  </div>
                ))
              }
            </div>
    </div>
  )
}

export default ProjectCard;