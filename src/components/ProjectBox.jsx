import React from 'react';

function ProjectBox({projectName, projectDescription, projectAchievement, projectTags}) {
  return (
    <>
    <div class="project-box">
        <div class="project-text-section">
            <h2>{projectName}</h2>
            <p>{projectDescription}</p>
            {projectAchievement && projectAchievement.length > 0 && (
            <p>
                <i>{projectAchievement.length === 1 ? 'Achievement' : 'Achievements'}:</i> {projectAchievement.join(', ')}
            </p>
            )}
            <div class="tags-section">
                {projectTags.map((tag) => {
                    return (
                        <div class="tag">
                            <p>{tag}</p>
                        </div>
                )})}
            </div>
        </div>
    </div>
    </>
  );
}

export default ProjectBox;