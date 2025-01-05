import React from 'react';
import ProjectBox from '../components/ProjectBox';

function Projects() {

    const projects = [
        {
          projectName: "Discover Lincoln",
          projectDescription: "A fully responsive tourist website for the Town of Lincoln located in the Niagara Region of Ontario. Main features of the site include: an interactive map with attraction, events and organizations, along with corresponding individual pages for those 3 categories, a history page and an invite section to tell friends and family about events happening. This was a mock project done at my current internship at Civiconnect that my team and I worked on.",
          projectAchievement: ["Best Design"],
          projectTags: ["React", "Next.js", "JavaScript", "Stripe"]
        },
        {
          projectName: "SoundCheck",
          projectDescription: "An online ticket purchasing web application that allows users to browse and purchase concert tickets. Main features of the site include: creating an account, logging in, browsing for tickets adding multiple tickets to cart and checking out.",
          projectTags: ["HTML", "CSS", "Python", "SQLite"]
        },
        {
          projectName: "Study Oppa",
          projectDescription: "A multi-functional study Discord Bot that was built by a group of friends for the RU Hacks 2022. Main features of this bot include: a commodore timer, flashcards, to-do lists and weekly calendar. The purpose of this bot is to help improve students’ studying experiences better and enhance their productivity and study sessions.",
          projectAchievement: ["Top 10 Overall", "The Wolfram Award"],
          projectTags: ["Python"]
        }
    ];
    
  return (
    <>
    <div class="projects text-section">
        <div class="heading-section"> 
            <h1>Code Gallery!</h1>
            <div>
                <h3>welcome to the exhibit of Jennifer’s coding creations, in my showcase below we have some of the featured projects I have worked on!</h3>
                <h3>like what you see? check out my <b><a href="https://github.com/jenniferchung14" target="_blank">github</a></b> to explore more of the projects I have done</h3>
            </div>
        </div>

        <div className="projects-container">
            {projects.map((project, index) => (
            <ProjectBox
                key={index}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectAchievement={project.projectAchievement}
                projectTags={project.projectTags}
            />
            ))}
        </div>
    </div>
    </>
  );
}

export default Projects;