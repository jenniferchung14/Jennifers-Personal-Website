import React from 'react';
import resume from '../assets/Resume - Jennifer Chung.pdf';
import ExperienceBox from '../components/ExperienceBox';

const workExperiences = [
  {
    title: "National IT Systems Support (Co-op)",
    company: "Big Brothers Big Sisters of Canada",
    dateRanges: "May 2025 - Aug 2025",
    bulletPoints: [
      "Designed and implemented a Power Automate Flow to automatically send onboarding emails upon user creation in the system, improving onboarding efficiency and consistency",
      "Managed 50+ user accounts across 10+ agencies using Microsoft 365 Admin Center and resolved an average of 20–30 weekly tickets for setups, deletion, access, permissions, and password issues",
      "Reduced average ticket resolution time by 30% through proactive communication and standardized account setup procedures"
    ]
  },
  {
    title: "Web Developer (Co-op)",
    company: "Civiconnect",
    dateRanges: ["Jan 2025 - Mar 2025", "May 2024 - Aug 2024"],
    bulletPoints: [
      [
        "Revamped and optimized a client’s website, improving accessibility, responsiveness and modernizing the UI/UX",
        "Integrated and configured a CMS using Strapi, enabling the client to manage and customize their website content 100% independently, maintaining flexibility for future growth",
        "Streamlined development processes by setting up a structured GitHub workflow, reducing deployment time by over 50% and enhancing team collaboration",
        "Conducted multi-stage testing to identify and resolve over 95% of reported bugs, improving website performance and smoother user experience"
      ],
      [
        "Produced 2+ full-stack application with key features such as user dashboards, multi-step sign-up flow, and dynamic search functionality",
        "Delivered a project in an accelerated 4-month timeline, achieving completion in less than half the allotted time",
        "Assisted 6+ colleagues with troubleshooting code issues and providing guidance, leading to improved code quality and faster problem resolution",
        "Implemented a like/saved feature with state management in Next.js, utilizing Postman for API integration and testing to ensure persistent user preferences"
      ]
    ]
  },
  {
    title: "Business Technology Analyst (Co-op)",
    company: "Dion Strategic Consulting Group Inc.",
    dateRanges: "Sep 2023 - Dec 2023",
    bulletPoints: [
      "Integrated various forms of data through Microsoft Fabric in order to clean and perform efficient data analysis",
      "Processed and cleaned over 40,000 lines of data extracted through web scraping to generate valuable insights and gather information for the company",
      "Maintained and reworked 4+ insurance websites for various clients to create a seamless user experience for customers"
    ]
  },
  {
    title: "Executive IT Support (Co-op)",
    company: "MPBSD Government of Ontario",
    dateRanges: "May 2023 - Sep 2023",
    bulletPoints: [
      "Assisted 25+ clients with setting up their devices and facilitated device configuration, ensuring in a seamless onboarding experience",
      "Provided technical support to clients by offering various solutions to resolving technical issues through diagnosing and troubleshooting devices and softwares",
      "Collaborated in a small team to write FAQs for the Ontario Public Service (OPS) website and optimize existing FAQS"
    ]
  },
  {
    title: "Network Systems Technician",
    company: "Toronto Metropolitan University",
    dateRanges: "May 2022 - Jul 2022",
    bulletPoints: [
      "Upgraded over 200 computer systems in Computer Science labs to ensure up-to-date performance and smooth user experience",
      "Implemented security measures, safeguarding over $200,000 worth of lab computers from theft"
    ]
  }
];

const leadership = [
  {
    title: "System Administrator",
    company: "TMU Computer Science Course Union",
    dateRanges: "Sep 2021 - Present",
    bulletPoints: [
      "Maintaining the security of the union’s social media accounts and regularly updating the website content to provide students with accurate and accessible information",
      "Played a key role in overseeing the internal operations of the CSCU and effectively advocating for 1000+ students’ interests and concerns as a student representative to the Department of Computer Science",
      "Implemented project management tools and software to streamline communication, task tracking, and ensure in team organization following Agile methodology",
      "Previous Positions: Deputy VP Academics (Sept 2021 - May 2022), VP Academics (May 2022 - May 2023), Deputy VP Operations (May 2023 - May 2024), VP Operations (May 2024 - May 2025)"
    ]
  },
  {
    title: "Co-Captain",
    company: "TMU Volleyball Co-ed Intramurals",
    dateRanges: "Jan 2024 - Mar 2024",
    bulletPoints: [
      "Led a co-ed intramural volleyball team of 6 with a focus on building trust, communication, and equitable involvement among all members",
      "Minimized game disruptions by effectively communicating with potential subs and organizing coverage for absent team members",
      "Maintained clear and consistent communication with teammates regarding game schedules, locations, and updates"
    ]
  },
  {
    title: "Marketing Associate",
    company: "TMU Women in Computer Science",
    dateRanges: "May 2022 - May 2023",
    bulletPoints: [
      "Planned and guided the marketing team in making posts and content to create opportunities and advocate for women in computer science",
      "Contributed to scheduling and organizing social media content for optimal engagement and consistency across our social media platforms, gaining 50+ followers in 6 months",
    ]
  }
];

const education = [
  {
    title: "Computer Science Co-op, B.Sc. (Hons.) | Minor in Psychology",
    company: "Toronto Metropolitan University (formerly Ryerson)",
    dateRanges: "Sep 2021 - Apr 2026",
    bulletPoints: [
      "Awards: Entrance Scholarship (95+ Average), Dean’s List, GHC 2022",
      "Relevant Courses: Data Structures, Web Systems Development, Introduction to Software Engineering, Algorithms, Operating Systems, Database Systems, Computer Security"
    ]
  }
];

function Experience() {
  return (
    <div class="experience text-section">
      <div class="heading-section">
        <h1>Jenn's Journey</h1>
        <h3>Below is an overview of Jennifer’s wide range of experience from leadership to work experiences along with the skills she has developed</h3>
        <h3>along the way over the years</h3> 
        <h3>Don’t have time to scroll? View my <b><a href={resume} target="_blank" rel="noopener noreferrer" class="a-links">resume</a></b> instead</h3>
      </div>
      <div className='experience-container'>
        <h2>Work Experience</h2>
        <div className='timeline'>
          {workExperiences.map((exp, idx) => (
            <ExperienceBox
              key={exp.title + idx}
              title={exp.title}
              company={exp.company}
              dateRanges={exp.dateRanges}
              bulletPoints={exp.bulletPoints}
            />
          ))}
        </div>
      </div>
      
      <div className='experience-container'>
        <h2>Leadership</h2>
        <div className='timeline'>
          {leadership.map((exp, idx) => (
            <ExperienceBox
              key={exp.title + idx}
              title={exp.title}
              company={exp.company}
              dateRanges={exp.dateRanges}
              bulletPoints={exp.bulletPoints}
            />
          ))}
        </div>
      </div>

      <div className='experience-container'>
        <h2>Education</h2>
        <div className='timeline'>
          {education.map((exp, idx) => (
            <ExperienceBox
              key={exp.title + idx}
              title={exp.title}
              company={exp.company}
              dateRanges={exp.dateRanges}
              bulletPoints={exp.bulletPoints}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;