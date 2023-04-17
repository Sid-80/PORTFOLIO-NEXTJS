"use client"
import { PageInfo } from '@/typing';
import { Cursor,useTypewriter  } from 'react-simple-typewriter';
import BackgroundAnimate from './BackgroundAnimate';
import { urlFor } from '@/sanity';

type Props={
    pageInfo:PageInfo;
}

function HomePage({pageInfo}:Props) {
    const name1 = pageInfo.name;
    const name2 = pageInfo.role;
    const [text,count] = useTypewriter({
        words:[`Hii, The Name's ${name1}`, "Loves-To-Play-BasketBall.tsx","<ButLovesToCodeMore />"],
        loop:true,
        delaySpeed:1000,
    })
  return (
    <div className='h-screen relative flex flex-col items-center justify-center text-center snap-y snap-mandatory overflow-hidden z-0'>
        <BackgroundAnimate />
        <img className='relative rounded-full h-60 w-60' src={urlFor(pageInfo?.myImage).url()} />
        <div className='z-20'>
            <h2 className='text-gray-700 tracking-[10px] text-sm font-bold pb-4 pt-2'>
                {pageInfo.role}
            </h2>
            <h1 className='dark:text-yellow-500 font-bold text-3xl px-8'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
        </div>
        
    </div>
  )
}

export default HomePage;


