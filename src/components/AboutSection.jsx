import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 flex gap-[25px] lg:gap-0 flex-wrap lg:flex-nowrap lg:flex-col ">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TailwindCss</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN full stack Developer </li>
        <li>
          Bechlore of Engineering Completed from LNCT Group of College (Bhopal)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN Stack Developer</li>
        <li>Frontend web Developer</li>
        <li>Backend Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="https://camo.githubusercontent.com/2deac39daa0924a345790ce050107aa19c8c49dbc73aa6fce086b83bc95fe784/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3638302f302a37513379765349765f7430696f4a2d5a2e676966"
          width={500}
          height={500}
          alt="coding"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            About I’m a GSAP-focused Frontend Developer with 3+ years of
            experience building animation-led, high-performance websites using
            React.js and Next.js. At Zerror Studios, I’ve developed and
            maintained the frontend for THR India, Esquire India, Robb Report
            India, and Manifest — delivering interactive editorial platforms for
            some of the country’s leading media powerhouses. My work spans
            scroll-driven storytelling, motion systems, CMS integrations, and
            performance optimization at scale. I’m now looking to collaborate
            with design-forward agencies and studios where I can craft immersive
            web experiences, push interaction quality, and ship visually
            distinctive websites that stand out.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
