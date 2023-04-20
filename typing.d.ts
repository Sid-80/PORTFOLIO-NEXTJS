interface SanityBody {
    _createdAt : string;
    _id : string;
    _rev : string;
    _updatedAt : string;
}
interface Image {
    _type : "image";
    asset:{
        _ref:string;
        _type:"refernce";
    };
}

export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    address:string;
    backgroundInfo:string;
    email:string;
    myImage:Image;
    myImage2:Image;
    name:string;
    phoneNo:string;
    profilePic:Image;
    role:string;
}

export interface Skill extends SanityBody{
    _type:"skill";
    image:Image;
    title:string;
    progress:number;
}

export interface Technology extends SanityBody{
    _type:"skill";
    image:Image;
    title:string;
    progress:number;
}

export interface Project extends SanityBody{
    _type:"project";
    image:Image;
    title:string;
    linkToBuild: string;
    summary:string;
    technologies: Technology[];
    points:string[];
}

export interface Experience extends SanityBody{
    _type:"experience";
    company:string;
    jobTitle:string;
    dateEnded: Date;
    dateStarted:Date;
    isCurrentlyWorkingHere:boolean;
    technologies: Technology[];
    points:string[];
}

export interface Social extends SanityBody{
    _type : "social";
    title : string;
    url : string;
}