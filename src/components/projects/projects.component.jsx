import React, { useState } from 'react';
import { Modal } from './modal/modal';
import {
  ProjectSection,
  ProjectsHeading,
  ProjectMenu,
  MenuItem,
  Img
} from './projects.styles';

const ProjectsSection = ({
  projectName,
  img,
  alt
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <ProjectSection>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ProjectsHeading>My Projects</ProjectsHeading>
      <ProjectMenu>
        <MenuItem>
          <Img className='background-image' onClick={openModal} src={img} alt={alt} />
          <div className='content'>
            <h1 className='title'>{projectName}</h1>
          </div>
        </MenuItem>
      </ProjectMenu>
    </ProjectSection>
  )
}

export default ProjectsSection;