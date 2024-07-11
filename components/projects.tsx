"use client";

import React from "react";
import { Button } from "./ui/button";
import { LinkPreview } from "./ui/link-preview";

export interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <h2 className="font-medium">Projects</h2>
      {/* First Project */}
      <div className="flex justify-between items-start gap-8 group mb-5 sm:mb-3">
        <div className="grow">
          <h3 className="text-xl py-2 leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1 ">
            <LinkPreview url="https://www.google.com">
              TimeWarp - Travel Agency
            </LinkPreview>
          </h3>
          <div className="mt-1 text-sm leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            cupiditate vel unde! Omnis repudiandae aspernatur, provident quasi,
            commodi libero numquam ipsa architecto, voluptates eos quia optio.
            Ducimus eum natus dolore.
          </div>
        </div>
        <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
          <span className="text-sm">View Project</span>
        </div>
      </div>
      {/* Second Project */}
      <div className="flex justify-between items-start gap-8 group mb-10 sm:mb-12">
        <div className="grow">
          <h3 className="text-xl py-2 leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1">
            <LinkPreview url="https://www.google.com">
              TimeWarp - Travel Agency
            </LinkPreview>
          </h3>
          <div className="mt-1 text-sm leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            cupiditate vel unde! Omnis repudiandae aspernatur, provident quasi,
            commodi libero numquam ipsa architecto, voluptates eos quia optio.
            Ducimus eum natus dolore.
          </div>
        </div>
        <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
          <span className="text-sm">View Project</span>
        </div>
      </div>
      {/* Button to View All Projects */}
      <div className="flex">
        <Button variant="outline">
          <a href="#" className="text-sm">
            View All Projects
          </a>
        </Button>
      </div>
    </div>
  );
};
