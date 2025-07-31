import React from 'react';

// function ExperienceBox() {

//     return (
//         <>
//         <div className="experience-box">
//             <div className='heading-section'>
//                 <h3>Web Developer</h3>
//                 <p><i>Civiconnect</i></p>
//             </div>
//             <div className='date-section'>
//                     <p className='date'>Jan 2025 - Mar 2025</p>
//             </div>
//             <div className='bullet-points'> 
//                 <ul>
//                     <li>Revamped and optimized a client’s website, improving accessibility, responsiveness and modernizing the UI/UX</li>
//                     <li>Integrated and configured a CMS using Strapi, enabling the client to manage and customize their website content 100% independently, maintaining flexibility for future growth</li> 
//                     <li>Streamlined development processes by setting up a structured GitHub workflow, reducing deployment time by over 50% and enhancing team collaboration</li>    
//                     <li>Conducted multi-stage testing to identify and resolve over 95% of reported bugs, improving website performance and smoother user experience</li>       
//                 </ul>
//             </div>

//              <div className='date-section'>
//                     <p className='date'>May 2024- Aug 2024</p>
//             </div>
//             <div className='bullet-points'> 
//                 <ul>
//                     <li>Produced 2+ full-stack application with key features such as user dashboards, multi-step sign-up flow, and dynamic search functionality</li>
//                     <li>Delivered a project in an accelerated 4-month timeline—achieving completion in less than half the allotted time</li> 
//                     <li>Assisted 6+ colleagues with troubleshooting code issues and providing guidance, leading to improved code quality and faster problem resolution</li>    
//                     <li>Implemented a like/saved feature with state management in Next.js, utilizing Postman for API integration and testing to ensure persistent user preferences</li>       
//                 </ul>
//             </div>
//         </div>

//         <div className="experience-box">
//             <div className='heading-section2'>
//                 <div className='title-section'>
//                     <h3>Business Technology Analyst</h3>
//                     <p><i>Dion Strategic Consulting Group Inc.</i></p>
//                 </div>
//                 <div className='date-section2'>
//                     <p className='date'>Sep 2023 - Dec 2023</p>
//                 </div>
//             </div>
//             <div className='bullet-points'> 
//                 <ul>
//                     <li>Integrated various forms of data through Microsoft Fabric in order to clean and perform efficient data analysis</li>
//                     <li>Processed and cleaned over 40,000 lines of data extracted through web scraping to generate valuable insights and gather information for the company</li> 
//                     <li>Maintained and reworked 4+ insurance websites for various clients to create a seamless user experience for customers</li>          
//                 </ul>
//             </div>
//         </div>
        
//         </>
//     );
// }

function ExperienceBox({ title, company, dateRanges, bulletPoints }) {
  const isMultiple = Array.isArray(dateRanges) && dateRanges.length > 1;

  return (
    <div className="experience-box">
      {isMultiple ? (
        <>
          <div className="position-info">
            <h3>{title}</h3>
            <p><i>{company}</i></p>
          </div>
          {dateRanges.map((date, idx) => (
            <React.Fragment key={date + idx}>
              <div className="date-section">
                <p className="date">{date}</p>
              </div>
              <div className="bullet-points">
                <ul>
                  {bulletPoints[idx].map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <div className="position-info2">
            <div className="title-section">
              <h3>{title}</h3>
              <p><i>{company}</i></p>
            </div>
            <div className="date-section2">
              <p className="date">{Array.isArray(dateRanges) ? dateRanges[0] : dateRanges}</p>
            </div>
          </div>
          <div className="bullet-points">
            <ul>
              {(Array.isArray(bulletPoints[0]) ? bulletPoints[0] : bulletPoints).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ExperienceBox;