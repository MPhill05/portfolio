import React, { useState } from 'react';
import myProjects from './projectData';
import Modal from '../modal/modal.component';
import {
  ProjectSection,
  ProjectsContainer,
  ProjectsHeading,
  MenuItem,
  Img
} from './projects.styles';

const ProjectsSection = () => {
  const [modal, setModal] = useState(false)
  const [tempData, setTempdata] = useState([]);

  const getData = (
    projectName,
    projectType,
    alt,
    modalImg,
    techStack,
    challenge,
    solution,
    outcome,
    viewCode,
    viewSite
  ) => {
    let tempData = [
      projectName,
      projectType,
      alt,
      modalImg,
      techStack,
      challenge,
      solution,
      outcome,
      viewCode,
      viewSite
    ];
    setTempdata(id => [1, ...tempData]);

    return setModal(prev => !prev);
  }

  return (
    <>
      <ProjectSection id='projects'>
        <ProjectsHeading>My Projects</ProjectsHeading>
        <ProjectsContainer>
          {myProjects.projects.map((project, index) => {
            return (
              <MenuItem>
                <Img className='background-image' src={project.img} alt={project.alt} key={index} />
                <div className='content' onClick={() => getData(project.projectName, project.projectType, project.alt, project.modalImg, project.techStack, project.challenge, project.solution, project.outcome, project.viewCode, project.viewSite)}>
                  <div className='hoverDetails'>
                    <h1 className='title'>{project.projectName}</h1>
                    <span className='projectType'>{project.projectType}</span>
                    <span className='viewMore'>View Project</span>
                  </div>
                </div>
              </MenuItem>
            )
          })}
        </ProjectsContainer>
      </ProjectSection>
      {
        modal === true ?
          <Modal
            projectName={tempData[1]}
            projectType={tempData[2]}
            modalImg={tempData[4]}
            alt={tempData[4]}
            techStack={tempData[5]}
            challenge={tempData[6]}
            solution={tempData[7]}
            outcome={tempData[8]}
            viewCode={tempData[9]}
            viewSite={tempData[10]}
            closeModal={() => !setModal(false)}
          /> : ''
      }
    </>
  )
}

export default ProjectsSection;