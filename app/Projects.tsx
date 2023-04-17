
import { Project } from '@/typing';
import React from 'react'
import ProjectCard from './ProjectCard';


type Props = {
    projects:Project[];
}

function Projects({projects}:Props) {
  return (
    <div className='h-screen relative flex flex-col items-center justify-center snap-y snap-mandatory '>
        <h1 className='uppercase pb-4 tracking-[15px] font-extrabold text-gray-400 animate-pulse text-2xl'>projects</h1>
            {
                projects.map((project)=>(
                    <ProjectCard key={project._id} project={project}/>
                ))
            }
            
    </div>
  )
}

export default Projects;