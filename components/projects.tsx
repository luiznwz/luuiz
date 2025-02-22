"use client";

import { Link } from "next-view-transitions";
import React from "react";
import { Button } from "./ui/button";
import { LinkPreview } from "./ui/link-preview";
import { motion } from "framer-motion";
export interface ProjectsProps {}

const projects = [
  // {
  //   title: "TimeWarp - Travel Agency",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate vel unde! Omnis repudiandae aspernatur, provident quasi, commodi libero numquam ipsa architecto, voluptates eos quia optio. Ducimus eum natus dolore.",
  //   imageUrl: "https://www.example.com/image1.jpg",
  //   projectUrl: "https://www.example.com",
  // },
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 sm:gap-4"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-medium text-secondary-foreground"
      >
        Projects
      </motion.h2>
      {projects.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          key={index}
          className="flex relative justify-between items-start gap-8 group mb-5 sm:mb-3"
        >
          <div className="grow">
            <h2 className="text-xl py-2 text-secondary-foreground leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1">
              <LinkPreview url={project.projectUrl}>{project.title}</LinkPreview>
            </h2>
            <p className="">{project.description}</p>
          </div>
          <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
            <a href="/projects" className="text-sm text-secondary-foreground">
              View Project
            </a>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex"
      >
        <Link href="/projects">
          <Button variant="outline">
            <span className="text-secondary-foreground">All</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};
