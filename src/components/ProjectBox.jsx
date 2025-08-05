import React from 'react';

function ProjectBox({projectName, projectDescription, projectAchievement, projectTags, projectLogo, projectLink}) {

    const noAchievements = !projectAchievement || projectAchievement.length === 0;

    return (
        <a
            href={projectLink}
            className="project-box-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="project-box">
                <div className="project-text-section">
                    <div className="project-heading-section"> 
                        <h2>{projectName}</h2>
                        <div className="logo-container">
                            <img className="project-logo" src={projectLogo} alt={projectName}/>
                        </div>
                    </div>
                    <p>{projectDescription}</p>
                    {projectAchievement && projectAchievement.length > 0 && (
                    <p>
                        <i>{projectAchievement.length === 1 ? 'Achievement' : 'Achievements'}:</i> {projectAchievement.join(', ')}
                    </p>
                    )}
                    <div className="tags-section" style={noAchievements ? { marginTop: '12px' } : {}}>
                        {projectTags.map((tag) => {
                            return (
                                <div className="tag">
                                    <p>{tag}</p>
                                </div>
                        )})}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectBox;