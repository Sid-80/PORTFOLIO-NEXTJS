import { urlFor } from '@/sanity';
import { PageInfo } from '@/typing';
import React from 'react'

type Props = {
    pageInfo : PageInfo;
}

function About({pageInfo}:Props) {
  return (
    <div className='relative h-screen flex flex-col md:flex-row md:rounded-lg mx-auto px-10 max-w-7xl items-center justify-evenly snap-y snap-mandatory overflow-hidden'>
        <h1 className='absolute top-20 font-extrabold uppercase tracking-[20px] text-gray-400 animate-pulse text-2xl'>ABOUT</h1>
        <img src={urlFor(pageInfo.profilePic).url()} className='md:mb-0 mt-5 md:h-95 md:w-64 h-56 w-56 xl:w-[500px] xl:h-[600px] object-cover flex-shrink-0 rounded-full ' />
        <div className='space-y-10 px-0 md:px-10'>
            <h3 className='text-base'>{pageInfo.backgroundInfo}</h3>
        </div>
    </div>
  )
}
 
export default About;