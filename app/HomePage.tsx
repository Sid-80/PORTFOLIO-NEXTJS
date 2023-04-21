"use client"
import { PageInfo } from '@/typing';
import { Cursor,useTypewriter  } from 'react-simple-typewriter';
import BackgroundAnimate from './BackgroundAnimate';
import { urlFor } from '@/sanity';
import { motion } from 'framer-motion';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

type Props={
    pageInfo:PageInfo;
}

function HomePage({pageInfo}:Props) {
    const name1 = pageInfo.name;
    const [text,count] = useTypewriter({
        words:["Loves-To-Play-BasketBall.tsx","<ButLovesToCodeMore />"],
        loop:true,
        delaySpeed:1000,
    })
  return (
    <div className='h-screen relative bg-zinc-900 flex flex-col items-center justify-center text-center overflow-hidden z-0'>
        <BackgroundAnimate />
        <img className='absolute hidden sm:block animate-pulse sm:w-screen bg-transparent  brightness-50 opacity-25 sm:h-screen' src={urlFor(pageInfo?.myImage).url()} />
        <img className='absolute sm:hidden w-screen animate-pulse bg-transparent opacity-25 h-screen ' src={urlFor(pageInfo?.myImage2).url()} />
        <div className='z-20'>
            <motion.h1
                initial={{
                    y:-80,opacity:0
                }} 
                whileInView={{
                    y:0,opacity:1
                }}
                transition={{
                    duration:1.3
                }}
            className='text-yellow-500 font-bold text-3xl p-5 first-letter:text-7xl first-letter:font-bold '>Hii, I'm <span className='uppercase '>{`${name1}`}</span></motion.h1>
            <motion.h2
                initial={{
                    z:-80,scale:0.5
                }} 
                whileInView={{
                    z:0,scale:1
                }}
                transition={{
                    duration:1.3
                }}
             className='text-gray-400 tracking-[15px] text-sm sm:text-lg font-bold pb-4 pt-2'>
                {pageInfo.role}
            </motion.h2>
            <motion.h1
                initial={{
                    y:80,opacity:0
                }} 
                whileInView={{
                    y:0,opacity:1
                }}
                transition={{
                    duration:1.3
                }}
             className='text-yellow-500 pt-3 font-bold text-2xl sm:text-3xl px-8'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </motion.h1>
        </div>
        <div><ArrowDownCircleIcon className='absolute text-yellow-500 bottom-10 h-10 animate-bounce w-10' /></div>
    </div>
  )
}

export default HomePage;


