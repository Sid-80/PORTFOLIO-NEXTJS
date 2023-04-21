"use client"
import { urlFor } from '@/sanity';
import { PageInfo } from '@/typing';
import React from 'react'
import { motion } from 'framer-motion';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

type Props = {
    pageInfo : PageInfo;
}

function About({pageInfo}:Props) {
  return (
    <div
      
     className='relative h-screen flex flex-col items-center justify-center snap-y snap-mandatory overflow-hidden'>
        <div>
          <motion.h1 
          initial={{ y:-100 }}
          whileInView={{y:0}}
          transition={{
              duration:2
          }}
          className='font-extrabold p-4 uppercase tracking-[20px] text-gray-400 animate-pulse text-2xl'>ABOUT</motion.h1>
        </div>
        <div
         className='flex sm:p-5 p-2 sm:m-10 flex-col md:flex-row items-center justify-center '>
          <div className='p-2'>
            <motion.img
              initial={{ x:-100 }}
              whileInView={{x:0}}
              transition={{
                  duration:2
              }}
             src={urlFor(pageInfo.profilePic).url()} className='md:h-95 md:w-64 h-56 w-56 xl:w-[400px] xl:h-[500px] object-cover rounded-full ' /></div>
          <div className=' w-[350px] p-5 md:w-[400px] lg:w-[600px] md:px-5'>
              <motion.h3
                initial={{ x:100 }}
                whileInView={{x:0}}
                transition={{
                    duration:2
                }}
               className='sm:text-2xl text-start first-letter:mr-3 sm:m-5 font-semibold text-base'>{pageInfo.backgroundInfo}</motion.h3>
          </div>
        </div>
        <div><ArrowDownCircleIcon className='absolute text-yellow-500 bottom-10 h-10 animate-bounce w-10' /></div>
    </div>
  )
}
 
export default About;