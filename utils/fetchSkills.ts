import { Skill } from "@/typing";

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || window.location.href}/api/getSkills`);
    const data = await res.json();
    const skills:Skill[] = data.skills;
    return skills;
}