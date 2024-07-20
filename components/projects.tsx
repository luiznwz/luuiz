"use client";

import { Link } from "next-view-transitions";
import React from "react";
import { Button } from "./ui/button";
import { LinkPreview } from "./ui/link-preview";
export interface ProjectsProps {}

const projects = [
  {
    title: "TimeWarp - Travel Agency",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate vel unde! Omnis repudiandae aspernatur, provident quasi, commodi libero numquam ipsa architecto, voluptates eos quia optio. Ducimus eum natus dolore.",
    imageUrl: "https://www.example.com/image1.jpg",
    projectUrl: "https://www.example.com",
  },
  {
    title: "TimeWarp - Travel Agency",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate vel unde! Omnis repudiandae aspernatur, provident quasi, commodi libero numquam ipsa architecto, voluptates eos quia optio. Ducimus eum natus dolore.",
    imageUrl: "https://www.example.com/image2.jpg",
    projectUrl: "https://www.example.com",
  },
  // Add more projects here
];

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-4">
      <h2 className="font-medium">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex justify-between items-start gap-8 group mb-5 sm:mb-3"
        >
          <div className="grow">
            <h3 className="text-xl py-2 leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1">
              <LinkPreview url={project.projectUrl}>
                {project.title}
              </LinkPreview>
            </h3>
            <div className="mt-1 text-sm text-muted-foreground leading-normal">
              {project.description}
            </div>
          </div>
          <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
            <span className="text-sm">View Project</span>
          </div>
        </div>
      ))}
      <div className="flex">
        <Link href="/projects">
          <Button variant="outline">
            <span className="text-sm">View All Projects</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
