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
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <div className="sticky top-0 z-20 flex p-5 shadow-lg justify-between bg-[#ECF2FF] text-[#393053] dark:text-[#ECF2FF]  dark:bg-[rgb(36,36,36)]  ">
      <motion.div
       className="flex"
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
        duration:1.1
       }}
       >
        <Link href={"/"}>SID</Link>
      </motion.div>
      <motion.div
       className="hidden sm:flex space-x-4"
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
        <a href="#tech">Tech</a>
        <a href="#info">Info</a>
        <a href="#contact">Contact</a>
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
        <div className="md:px-5">
          <div>
            {currentTheme === "dark" ? (
              <SunIcon
                className="h-6 w-6 cursor-pointer text-yellow-400"
                onClick={() => setTheme("light")}
              />
            ) : (
              <MoonIcon
                className="h-6 w-6 cursor-pointer text-slate-900"
                onClick={() => {setTheme("dark");console.log("toggling")}}
              />
            )}
          </div>
        </div>
        {
          socialLinks.map((link)=>(
            <SocialIcon bgColor="black" fgColor="white" style={{height:30,width:30}} url={link.url}/>
          ))
        }
        
      </motion.div>
    </div>
  )
}

export default Header;