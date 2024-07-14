"use client"
import { Social } from '@/typing';
import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {
  socialLinks :Social[];
}

function Contact({socialLinks}:Props) {
  return (
    <div className='h-screen relative flex flex-col items-center justify-center '>
        <h1 className='uppercase pb-4 sm:m-10 tracking-[15px] font-extrabold text-center text-gray-400 animate-pulse text-2xl'>You Can contact me here</h1>
        <div className='flex flex-row'>
        {
          socialLinks.map((link)=>(
            <motion.div 
              initial={{ x:-100 }}
              whileInView={{x:0}}
              transition={{
                  duration:1.5
              }}
              key={link._id} className='p-1 m-5 dark:hover:border-yellow-400 hover:border-sky-500 hover:border-4 rounded-full '>
              <SocialIcon bgColor="black" fgColor="white" url={link.url} style={{height:70,width:70}} />
            </motion.div>
          ))
        }
        </div>
        <div>
          <h1 className='uppercase px-10 m-10 tracking-[3px] font-extrabold text-center text-gray-400 animate-pulse text-lg'>MADE WITH <span className='text-yellow-500 text-xl font-bold'>{`</>`}</span> BY SIDDHARTH</h1>
        </div>
    </div>
  )
}

export default Contact;