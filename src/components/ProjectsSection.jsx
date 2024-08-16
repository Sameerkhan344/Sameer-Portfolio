import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Engineered Floors Website",
    description: "Ceactive website Product show case",
    image: "/images/projects/EngineerFloor.png",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/Sameerkhan344/MovieApp",
    previewUrl: "https://snazzy-semolina-3b8cf2.netlify.app/",
    Tech: "#React.js, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 2,
    title: "Neverland Awwwards Website",
    description: "Ceactive website Product show case",
    image: "/images/projects/neverland.png",
    tag: ["All", "Web"],
    // gitUrl:
    //   "https://651fe070281c09602cda9280--gilded-maamoul-bc5e4f.netlify.app/",
    previewUrl:
      "https://651fe070281c09602cda9280--gilded-maamoul-bc5e4f.netlify.app/",
    Tech: "#React.js, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 3,
    title: "SHAH DESIGN Portfolio Website",
    description: "This is a beautiful UI website with animation",
    image: "/images/projects/resort-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/SHAH-DESIGN-WEBSITE-CLONE",
    previewUrl:
      "https://64a6ec71883fac4fcdb4622d--peppy-frangollo-0f4772.netlify.app/",
    Tech: "Html, Css, JavScript, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 4,
    title: "JOMER Awwwards Website",
    description: "Ceactive website Product show case",
    image: "/images/projects/jomer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/JOMER-website-clone",
    previewUrl: "https://sameerkhan344.github.io/JOMER-website-clone/",
    Tech: "#React.js, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 5,
    title: "TALA Awwwards Website",
    description: "Ceactive website Product show case",
    image: "/images/projects/TALA.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/TALA-Website-Clone",
    previewUrl: "https://sameerkhan344.github.io/TALA-Website-Clone/",
    Tech: "#React.js, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 6,
    title: "Resort Website",
    description: "This is a beautiful UI website with animation",
    image: "/images/projects/resort-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/Resort-Client-project-freelance",
    previewUrl: "https://resort-client-project-freelance.vercel.app/",
    Tech: "Html, Css, JavScript, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 7,
    title: "Designer Portfolio Website",
    description: "This is a beautiful UI website with animation",
    image: "/images/projects/Designer portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://fabulous-axolotl-663a4b.netlify.app/",
    previewUrl: "https://fabulous-axolotl-663a4b.netlify.app/",
    Tech: "Html, Css, JavScript, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 8,
    title: "BUSINESS WITH CREATIVE DESIGN WEBSITE",
    description: "This is a beautiful UI website portfolio with animation",
    image: "/images/projects/ShivangiMahajan.png",
    tag: ["All", "Web"],
    gitUrl: "https://shivangimahajan.com/",
    previewUrl: "https://shivangimahajan.com/",
    Tech: "Html, Css, JavScript, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 10,
    title: "Rocket Air website",
    description: "This is a beautiful UI website portfolio with animation",
    image: "/images/projects/Rocket AIR.png",
    tag: ["All", "Web"],
    gitUrl: "https://thunderous-crumble-c31ad1.netlify.app/",
    previewUrl: "https://thunderous-crumble-c31ad1.netlify.app/",
    Tech: "Html, Css, JavScript, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 11,
    title: "Lagunitas-beer-bottel-project",
    description: "This is a beautiful UI website portfolio with animation",
    image: "/images/projects/Lagnitas.png",
    tag: ["All", "Web"],
    gitUrl: "https://lagunitas-beer-bottel-project.vercel.app/",
    previewUrl: "https://lagunitas-beer-bottel-project.vercel.app/",
    Tech: "Html, Css, JavScript, TailwindCss, GSAP, Locomotive",
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
    title: "NIEX-Website UI Develop",
    description: "This is a user interface website ",
    image: "/images/projects/Nexi-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/NIFA-website",
    previewUrl: "https://nifa-website.vercel.app/",
    Tech: "#React.js, TailwindCss,",
  },
  {
    id: 15,
    title: "RAWG Game App",
    description: "This is a game application",
    image: "/images/projects/RAWG-previw.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sameerkhan344/RAWG-game-Web-App",
    previewUrl: "https://rawg-game-web-app-s9b8.vercel.app/",
    Tech: "#React.js, TailwindCss, API",
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
