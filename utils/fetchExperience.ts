import { Experience } from "@/typing";

export const fetchExps = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.json();
    const exps:Experience[] = data.experience;
    return exps;
}