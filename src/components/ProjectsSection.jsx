import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Movie-App",
    description: "Search Movies or Tv Shows and watch trailor",
    image: "/images/projects/preview-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/MovieApp",
    previewUrl: "https://movie-app-blue-pi.vercel.app",
    Tech: "#React.js, TailwindCss, API",
  },
  {
    id: 2,
    title: "TODO-APP CURD",
    description:
      "Create your list with this todo App and manage it. with the help of drag and drop",
    image: "/images/projects/Todo-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/TODO-LIST-APP",
    previewUrl: "https://todo-list-app-kohl-nine.vercel.app",
    Tech: "#React.js, TailwindCss,",
  },
  {
    id: 3,
    title: "Weather-App",
    description:
      "In this app we can check real time weather of any city or country.",
    image: "/images/projects/Weather-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/Weather_App_React",
    previewUrl: "https://weather-app-react-ten-lyart.vercel.app/",
    Tech: "#React.js, TailwindCss, API",
  },
  {
    id: 4,
    title: "NIEX-Website UI Develop",
    description: "This is a user interface website ",
    image: "/images/projects/Nexi-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/NIFA-website",
    previewUrl: "https://nifa-website.vercel.app/",
    Tech: "#React.js, TailwindCss,",
  },
  {
    id: 6,
    title: "RAWG Game App",
    description: "This is a game application",
    image: "/images/projects/RAWG-previw.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/RAWG-game-Web-App",
    previewUrl: "https://rawg-game-web-app-s9b8.vercel.app/",
    Tech: "#React.js, TailwindCss, API",
  },
  {
    id: 6,
    title: "Resort Website",
    description: "This is a beautiful UI website with animation",
    image: "/images/projects/resort-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/Resort-Client-project-freelance",
    previewUrl: "https://resort-client-project-freelance.vercel.app/",
    Tech: "Html, Css, JavScript, TailwindCss",
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
          name="Figma"
          isSelected={tag === "Figma"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2"
      >
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
              Tech={project.Tech}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
