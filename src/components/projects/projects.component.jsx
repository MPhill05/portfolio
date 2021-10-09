import React, { useState } from 'react';
import { myProjects } from './projectData';
import { openModal } from '../../pages/home.component';
import {
  ProjectSection,
  ProjectsContainer,
  ProjectsHeading,
  MenuItem,
  Img
} from './projects.styles';

// function projectData(data) {
//   let project = [data];
//   return project
// }

const ProjectsSection = () => {
  const [projectData, setProjectData] = useState()

  return (
    <ProjectSection id='projects'>

      <ProjectsHeading>My Projects</ProjectsHeading>
      <ProjectsContainer>
        {myProjects.projects.map((project) => {
          return (
            <MenuItem>
              <Img className='background-image' src={project.img} alt={project.alt} />
              <div className='content' onClick={() => openModal(console.log({projectData}), setProjectData(project))}>
                <div className='hoverDetails'>
                  <h1 className='title'>{project.projectName}</h1>
                  <span className='projectType'>{project.projectType}</span>
                </div>
                <span className='viewMore'>View Project</span>
              </div>
            </MenuItem>
          )
        })}
      </ProjectsContainer>
    </ProjectSection>
  )
}

export default ProjectsSection;