"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A modern, responsive website built with Next.js, focusing on speed, SEO, and user experience. It showcases dynamic content handling and advanced front-end techniques for a polished and professional presentation.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saad140606/nextjs-portfolio-with-tailwindcss.git",
    previewUrl: "https://saadnajam-portfolio-tailwindcss.vercel.app/",
  },
  {
    id: 2,
    title: "Blogging Website",
    description: "A user-friendly blogging platform with easy content management and a clean, minimalist design, enabling seamless content publishing and reading experiences.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Car Buying And Selling Website",
    description: "An innovative car-selling platform that simplifies car transactions with features like detailed listings, advanced search filters, and a user-centric interface.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saad140606/GIAIC-react-with-tailwindcss-multipage.git",
    previewUrl: "https://carconnect-carbuyingandselling.vercel.app/",
  },
  {
    id: 4,
    title: "Hotel Booking Web",
    description: "A property booking website designed for ease of use, offering a seamless booking process and detailed property views to enhance user convenience and accessibility.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saad140606/GIAIC-multipage-with-react-customcss.git",
    previewUrl: "https://stayease-hotelbooking.vercel.app/",
  },
  {
    id: 5,
    title: "Real Estate Web",
    description: "A comprehensive real estate platform that allows users to explore properties with map views, filtering options, and detailed property descriptions for informed decision-making.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saad140606/BQ-Final-Project-Group.git",
    previewUrl: "https://myhomerealestate.vercel.app/",
  },
  {
    id: 6,
    title: "Vegetables Ordering Web",
    description: "An efficient online platform for ordering fresh vegetables, with a straightforward ordering process, easy navigation, and a secure checkout experience for customers.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saad140606/Mid-Term-BanoQabil.git",
    previewUrl: "https://teamhyperlinksvegefoods.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;