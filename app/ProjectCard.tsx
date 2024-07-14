"use client";
import { urlFor } from "@/sanity";
import { Project } from "@/typing";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import { LinkPreview } from "@/components/ui/link-preview";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <Card className="w-[270px] group hover:border-gray-400 hover:border-[1px] sm:w-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <SocialIcon className="w-5 h-5" fgColor="white" url={project.points[0]} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-col gap-2 sm:gap-4">
        <CardDescription>{project.summary}</CardDescription>
        <LinkPreview
          url={urlFor(project.image).url()}
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          LIVE
        </LinkPreview>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;