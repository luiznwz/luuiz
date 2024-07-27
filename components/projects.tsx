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
    title: "S3 Upload - Image Storage",
    description:
      "A robust and efficient service for uploading and storing gallery images on AWS S3. This project leverages the AWS SDK to seamlessly integrate with Amazon S3, allowing users to upload images through a user-friendly interface built with Next.js.",
    imageUrl: "https://www.example.com/image2.jpg",
    projectUrl: "https://www.example.com",
  },
  // Add more projects here
];

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-4">
      <h2 className="font-medium text-secondary-foreground">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex relative justify-between items-start gap-8 group mb-5 sm:mb-3"
        >
          <div className="grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute sm:left-[-24px] sm:top-[12px] opacity-0 shadow-none outline-none transition-opacity group-hover:opacity-100 group-focus:opacity-100"
            >
              <path
                d="M10 19.0004L9.82843 19.1719C8.26634 20.734 5.73368 20.734 4.17158 19.1719L3.82843 18.8288C2.26634 17.2667 2.26633 14.734 3.82843 13.1719L7.17158 9.8288C8.73368 8.2667 11.2663 8.2667 12.8284 9.8288L13.1716 10.1719C13.8252 10.8256 14.2053 11.6491 14.312 12.5004"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.68799 12.5004C9.79463 13.3516 10.1748 14.1752 10.8284 14.8288L11.1715 15.1719C12.7336 16.734 15.2663 16.734 16.8284 15.1719L20.1715 11.8288C21.7336 10.2667 21.7336 7.73404 20.1715 6.17194L19.8284 5.8288C18.2663 4.2667 15.7336 4.2667 14.1715 5.8288L14 6.00037"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h2 className="text-xl py-2 text-secondary-foreground leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1">
              <LinkPreview url={project.projectUrl}>
                {project.title}
              </LinkPreview>
            </h2>
            <p className="">{project.description}</p>
          </div>
          <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
            <a href="/" className="text-sm text-secondary-foreground">
              View Project
            </a>
          </div>
        </div>
      ))}
      <div className="flex">
        <Link href="/projects">
          <Button variant="outline">
            <span className="text-secondary-foreground">View All Projects</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
