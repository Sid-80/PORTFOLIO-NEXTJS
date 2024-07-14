"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Experience } from "@/typing";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: Experience[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "transparent",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto scrollbar-hide flex justify-center relative space-x-4 p-2 sm:space-x-10 rounded-md sm:p-10"
      ref={ref}
    >
      <div className="flex flex-col">
        {content.map((item, index) => (
          <div key={item.jobTitle + index} className="sticky flex p-2">
            <div className="flex flex-col items-center justify-center h-full sm:p-4">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base font-bold text-slate-100"
              >
                {item.dateStarted.toString()}
              </motion.h2>
              <div
                style={{ background: backgroundGradient }}
                className={cn(
                  "h-[75%] w-2 p-1 border-l rounded-md bg-white top-10 overflow-hidden",
                  contentClassName
                )}
              />
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base font-bold text-slate-100"
              >
                {item.dateEnded.toString()}
              </motion.h2>
            </div>

            <div className="my-20 mt-10 p-2">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="sm:text-2xl text-lg font-bold text-slate-100"
              >
                {item.jobTitle}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg font-semibold text-slate-100 max-w-sm mt-2"
              >
                {item.company}
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm text-justify text-slate-300 max-w-sm mt-5"
              >
               {item?.points[0]}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
