import styled from "styled-components";

export const ProjectSection = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  padding: 20px 300px;
`;

export const ProjectsHeading = styled.h1`
  padding: 20px 0;
  text-align: center;
  
`;

export const ProjectMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  min-width: 30%;
  width: 30vw;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    &.content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Img = styled.img`
  overflow: hidden;
`;