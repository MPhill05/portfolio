import React, { useState } from 'react';
import { Modal } from '../modal/modal';
import {
  ProjectsContainer,
  ProjectsWrapper,
  InfoRow,
  TextWrapper,
  ProjectName,
  Subtitle,
  ImgWrap,
  Img
} from './projects.styles';

const ProjectsSection = ({
  projectName,
  description,
  img,
  alt,
  size
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <ProjectsContainer>
        <ProjectsWrapper>
          <InfoRow>
            <TextWrapper>
              <ProjectName>{projectName}</ProjectName>
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
            <ImgWrap>
              <Img onClick={openModal} src={img} alt={alt} size={size} />
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </ImgWrap>
          </InfoRow>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  )
}

export default ProjectsSection;