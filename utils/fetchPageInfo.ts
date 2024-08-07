import { PageInfo } from "@/typing";

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || window.location.href}/api/getPageInfo`);
    const data = await res.json();
    const PageInfos:PageInfo = data.pageInfo;
    return PageInfos; 
}