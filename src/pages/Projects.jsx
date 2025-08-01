import React from 'react';
import ProjectBox from '../components/ProjectBox';
import IconBox from '../components/IconBox';
import discoverLincoln from '../assets/DiscoverLincoln.png';
import soundCheck from '../assets/SoundCheck.png';
import studyOppa from '../assets/Study.png';
import eCommerce from '../assets/ECommerce.png';
import turtle from '../assets/turtle.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png'; 
import react from '../assets/react.png'; 
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import node from '../assets/node.png';
import next from '../assets/next.png';
import php from '../assets/php.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import c from '../assets/c.png';
import bash from '../assets/bash.png';
import elixir from '../assets/elixir.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import sql from '../assets/sql.png';
import excel from '../assets/excel.png';
import powerAutomate from '../assets/powerAutomate.png';
import figma from '../assets/figma.png';
import stripe from '../assets/stripe.png';
import postman from '../assets/postman.png';

function Projects() {

  const projects = [
      {
        projectName: "Discover Lincoln",
        projectLogo: discoverLincoln,
        projectDescription: "A fully responsive tourist website showcasing attractions, events and organizations. The site also features a history page and an invite section for sharing events with friends and family.",
        projectAchievement: ["Best Design"],
        projectTags: ["React", "Next.js", "JavaScript", "Stripe"]
      },
      {
        projectName: "SoundCheck",
        projectLogo: soundCheck,
        projectDescription: "An online ticket purchasing web application that allows users to browse and purchase concert tickets. Main features of the site include: creating an account, logging in, browsing for tickets adding multiple tickets to cart and checking out.",
        projectTags: ["HTML", "CSS", "Python", "SQLite"],
        projectLink: "https://github.com/jenniferchung14/soundCheck"
      },
      {
        projectName: "Study Oppa",
        projectLogo: studyOppa,
        projectDescription: "A multi-functional study Discord Bot built by a group of friends for the RU Hacks 2022. Main features of this bot include: a commodore timer, flashcards, to-do lists and weekly calendar.",
        projectAchievement: ["Top 10 Overall", "The Wolfram Award"],
        projectTags: ["Python", "Discord API"],
        projectLink: "https://github.com/jenniferchung14/Study-Oppa"
      },
      {
        projectName: "E-Commerce Simulator",
        projectLogo: eCommerce,
        projectDescription: "An e-commerce simulator where customers can browse and buy products, with a personal cart where they can view, add or remove items. Once ready, they can order everything in their cart, and the system ships the products.",
        projectTags: ["Java"],
        projectLink: "https://github.com/jenniferchung14/E-Commerce-System-Simulator"
      },
      {
        projectName: "Turtle Olympics",
        projectLogo: turtle,
        projectDescription: "A quick and fun mini-game where five turtles compete in a 100-metre dash. At the start of each round, players place a bet on a turtle, and the race outcome decides whether they gain or lose money.",
        projectTags: ["Python", "Turtle"],
        projectLink: "https://github.com/jenniferchung14/Turtle-Olympics"
      }
  ];
  
  const skillsIcons = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: javascript, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: node, alt: "Node.js" },
    { src: next, alt: "Next.js" },
    { src: php, alt: "PHP" },
    { src: python, alt: "Python" },
    { src: java, alt: "Java" },
    { src: c, alt: "C" },
    { src: bash, alt: "Bash" },
    { src: elixir, alt: "Elixir" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: sql, alt: "SQL" },
    { src: excel, alt: "Excel" },
    { src: powerAutomate, alt: "Power Automate" },
    { src: figma, alt: "Figma" },
    { src: stripe, alt: "Stripe" },
    { src: postman, alt: "Postman" }
  ];

  return (
    <>
    <div class="projects text-section">
        <div class="heading-section"> 
            <h1>Code Gallery!</h1>
            <div>
                <h3>Welcome to the exhibit of Jennifer’s coding creations! First, we have a showcase of some of the langauges and tools I have picked up at a quick glance,
                  below that are some of the featured projects I have crafted :{")"}</h3>
                <h3>Like what you see? Check out my <b><a className="a-links" href="https://github.com/jenniferchung14" target="_blank">github</a></b> to explore more of the projects I have done!</h3>
            </div>
        </div>

        <div className="skills-section">
            <h2>Technologies</h2>
            <IconBox icons={skillsIcons} />
        </div>

        <h2>Featured Projects</h2>
        <div className="project-container">
            {projects.map((project, index) => (
            <ProjectBox
                key={index}
                projectName={project.projectName}
                projectLogo={project.projectLogo}
                projectDescription={project.projectDescription}
                projectAchievement={project.projectAchievement}
                projectTags={project.projectTags}
                projectLink={project.projectLink}
            />
            ))}
        </div>

        <div className="future-projects">
          <h2 className="loading-text">
            {"more to come...".split("").map((char, index) => (
              <span
                key={`more-${index}`}
                className="wave-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <h2 className="loading-text">
            {"check back soon!".split("").map((char, index) => (
              <span
                key={`soon-${index}`}
                className="wave-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>
    </div>
    </>
  );
}

export default Projects;