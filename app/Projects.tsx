"use client";
import { Project } from "@/typing";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center">
      <h1 className="uppercase p-14 tracking-[15px] font-extrabold text-gray-400 animate-pulse text-2xl">
        projects
      </h1>
      <Carousel>
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem className="flex items-center justify-center" key={project._id}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Projects;
