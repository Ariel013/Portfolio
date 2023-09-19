"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dashboard Project Website",
    description: " The Dashboard project is a web application inspired by Netvibes, offering a customizable dashboard with configurable widgets",
    image: "../images/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/../images/dashboard.png",
  },
  {
    id: 2,
    title: "Dashboard Cryptos Widget",
    description: "Cryptos Widget who display some cryptos currencies with they currently price",
    image: "../images/dashboard2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "../images/dashboard2.png",
  },
  {
    id: 3,
    title: "My Show Time",
    description: "The MyShowTime project is a web application that allows users to reserve tickets for concerts and generate QR codes to access their tickets. The application was developed using Nestjs.",
    image: "../images/myshowtime.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "../images/myshowtime.png",
  },
  {
    id: 4,
    title: "My Show Time",
    description: "This project offers the following functionalities: Search for concerts by date, band or genre. Reservation of concert tickets. QR code generation for each ticket booked. Display concert details and reserved tickets.",
    image: "../images/myshowtime2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "../images/myshowtime2.png",
  },
  {
    id: 5,
    title: "My Rotten Tomatoes",
    description: "My Rotten Tomatoes is a dynamic and engaging website designed for movie lovers and critics. It offers a comprehensive platform where users can experience the latest movies, with detailed descriptions, user ratings and audience reviews.",
    image: "../images/rotten.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "../images/rotten.png",
  },
  // {
  //   id: 6,
  //   title: "My Rotten Tomatoes",
  //   description: "This movie platform allows administrators to easily manage movie content, get insights into audience opinions, and make it easy to add new movies.",
  //   image: "../images/rotten2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/EpitechCodingAcademyPromo2023/C-COD-270-COT-2-2-c2cod270p0-haryis.afoutou",
  //   previewUrl: "../images/rotten2.pn",
  // },
  // {
  //   id: 7,
  //   title: "My Show Time",
  //   description: "This project offers the following functionalities: Search for concerts by date, band or genre. Reservation of concert tickets. QR code generation for each ticket booked. Display concert details and reserved tickets.",
  //   image: "../images/myshowtime2.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "https://github.com/EpitechCodingAcademyPromo2023/C-COD-250-COT-2-2-showtime-alfredito.koudebi",
  //   previewUrl: "../images/myshowtime2.png",
  // },
  
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
