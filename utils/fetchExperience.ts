import { Experience } from "@/typing";

export const fetchExps = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || window.location.href}/api/getExperience`);
    const data = await res.json();
    const exps:Experience[] = data.experience;
    return exps;
}