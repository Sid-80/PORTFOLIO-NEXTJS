"use client"
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typing";
import React, { useEffect, useState } from 'react';
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
type Props = {
  socialLinks:Social[];
}

function Header({socialLinks}:Props){
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <div className="sticky scrollbar-hide top-0 z-20 flex p-2 sm:p-5 shadow-lg justify-between bg-transparent  text-[rgb(36,36,36)] dark:text-[#ECF2FF]     ">
      <motion.div
       className="hidden sm:flex space-x-2"
       initial={{
        x:-500,
        opacity:0,
        scale:0.5
       }}
       animate={{
        x:0,
        opacity:1,
        scale:1
       }}
       transition={{
        duration:1.3
       }}
       >
        <a className="rounded-lg text-sm decoration-sky-500 p-2 lg:px-3 font-semibold text-yellow-500 dark:bg-transparent hover:underline underline-offset-4 decoration-4 transition delay-75 ease-in-out duration-150 " href="#hero">HOME</a>
        <a className="rounded-lg text-sm decoration-sky-500 p-2 lg:px-3 font-semibold text-yellow-500 dark:bg-transparent hover:underline underline-offset-4 decoration-4 transition delay-75 ease-in-out duration-150 " href="#about">ABOUT</a>
        <a className="rounded-lg text-sm decoration-sky-500 p-2 lg:px-3 font-semibold text-yellow-500 dark:bg-transparent hover:underline underline-offset-4 decoration-4 transition delay-75 ease-in-out duration-150 " href="#project">PROJECTS</a>
        <a className="rounded-lg text-sm decoration-sky-500 p-2 lg:px-3 font-semibold text-yellow-500 dark:bg-transparent hover:underline underline-offset-4 decoration-4 transition delay-75 ease-in-out duration-150 " href="#skill">SKILLS</a>
        <a className="rounded-lg text-sm decoration-sky-500 p-2 lg:px-3 font-semibold text-yellow-500 dark:bg-transparent hover:underline underline-offset-4 decoration-4 transition delay-75 ease-in-out duration-150 " href="#contact">CONTACT</a>
      </motion.div>
      <motion.div
       className="flex space-x-5"
       initial={{
        x:-500,
        opacity:0,
        scale:0.5
       }}
       animate={{
        x:0,
        opacity:1,
        scale:1
       }}
       transition={{
        duration:1.5
       }}
       >
        <div className="p-2 rounded-full bg-black">
          <div>
            {currentTheme === "dark" ? (
              <SunIcon
                className="h-6 w-6 cursor-pointer text-yellow-400"
                onClick={() => setTheme("light")}
              />
            ) : (
              <MoonIcon
                className="h-6 w-6 cursor-pointer  text-slate-300"
                onClick={() => {setTheme("dark")}}
              />
            )}
          </div>
        </div>
        {
          socialLinks.map((link)=>(
            <SocialIcon key={link._id} bgColor="black" fgColor="white" style={{height:40,width:40}} url={link.url}/>
          ))
        }
        
      </motion.div>
    </div>
  )
}

export default Header;