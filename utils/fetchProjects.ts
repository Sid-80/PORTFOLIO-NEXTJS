import { Project } from "@/typing";

export const fetchProjects = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || window.location.href}/api/getProjects`);
    const data = await res.json();
    const projects:Project[] = data.projects;
    return projects;
}