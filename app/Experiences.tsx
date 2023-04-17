"use client"
import { Experience } from '@/typing';
import React from 'react'
import { ForwardIcon } from '@heroicons/react/24/solid';
import { urlFor } from '@/sanity';

type Props = {
    exps:Experience[];
}

function Experiences({exps}:Props) {
    console.log(exps)
  return (
    <div className='h-screen relative flex flex-col items-center justify-center text-center snap-y snap-mandatory overflow-hidden z-0'>
        <h1 className='uppercase p-10 tracking-[15px] font-extrabold text-gray-400 animate-pulse text-2xl'>experiences</h1>
        {
            exps.map((exp)=>(
                <div className='flex flex-row gap-4'>
                    <div key={exp._id} className='flex w-[70px] h-[70px] animate-pulse text-center items-center justify-center rounded-full text-zinc-300'><ForwardIcon /></div>
                    <div className='items-center justify-center'>
                        <h1 className='text-3xl tracking-[4px] uppercase'>{exp.jobTitle}</h1>
                        <h1 className='text-xl tracking-[4px] uppercase'>{exp.company}</h1>
                        <p>{exp.points}</p>
                        <div className='flex flex-row'>
                        {
                            exp.technologies.map((tech)=>(
                            <div className='md:px-8 p-1 animate-pulse' key={tech._id}>
                                <img src={urlFor(tech.image).url()} className='md:h-10 md:w-12 h-6 w-8' />
                                <p className='text-left text-xs lg:text-xl' >{tech.title}</p>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Experiences;