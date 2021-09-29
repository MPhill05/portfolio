import React, { useState } from 'react';
import { Modal } from './modal/modal';
import { myProjects } from './projectData';
import {
  ProjectSection,
  ProjectsContainer,
  ProjectsHeading,
  MenuItem,
  Img
} from './projects.styles';

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <ProjectSection>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ProjectsHeading>My Projects</ProjectsHeading>
      <ProjectsContainer>
        {myProjects.projects.map(({ projectName, img, alt, projectType }) => (
          <MenuItem>
            <Img className='background-image' src={img} alt={alt} />
            <div className='content' onClick={openModal}>
              <div className='hoverDetails'>
                <h1 className='title'>{projectName}</h1>
                <span className='projectType'>{projectType}</span>
              </div>
              <span className='viewMore'>View More</span>
            </div>
          </MenuItem>
        ))}
      </ProjectsContainer>
    </ProjectSection>
  )
}

export default ProjectsSection;