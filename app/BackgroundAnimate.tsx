import React from 'react'
import { motion } from 'framer-motion';

function BackgroundAnimate() {
  return (
    <motion.div
     className='relative flex items-center justify-center'
     initial={{
      opacity:0,
     }}
     animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius:["20%","20%","50%","80%","20%"]
     }}
     transition={{
      duration:2.5,
     }}
    >
        <div className='absolute border-4 border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border-4 border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border-4 border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border-4  border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border-4 border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border-4 border-[rgb(36,36,36)] rounded-full w-[300px] h-[300px] mt-52 animate-ping  '/>
        <div className='absolute border-4 border-[rgb(36,36,36)] rounded-full w-[350px] h-[350px] mt-52 animate-ping  '/>
        <div className='absolute border-4 border-[rgb(36,36,36)] rounded-full w-[600px] h-[600px] mt-52 animate-pulse '/>
        <div className='absolute border-4 border-[rgb(36,36,36)] rounded-full w-[600px] h-[600px] mt-52 animate-pulse '/>
        <div />
    </motion.div>
  )
}

export default BackgroundAnimate;