import styled from "styled-components";

export const ProjectSection = styled.div`
  width: 100%;
  height: 55rem;

  @media screen and (max-width: 768px) {
    height: 75rem;
  }

  @media screen and (min-width: 300px) {
    @media screen and (max-width: 500px) {
      height: 68rem
    }
  }
`;

export const ProjectsContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProjectsHeading = styled.h1`
  padding: 40px 0;
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
  width: 35vw;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  overflow: hidden;

  .content {
    position: absolute;
    text-align: center;
    text-decoration: none;
    color: transparent;
    width: 35vw;
    height: 35vh;
    display: table;
  }

  .hoverDetails {
    display: table-cell;
    vertical-align: middle;
    max-height: 18rem;
  }

  .viewMore {
    position: absolute;
    margin: 0 auto;
    display: block;
    padding: 10px 0;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  
  &:hover {
    cursor: pointer;

    & .content {
      color: white;
      background: rgba(0, 0, 0, 0.7);
      max-height: 20rem;
    }

    & .background-image {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    margin: auto;
    padding-bottom: 60px;

    &:first-child {
      margin-right: auto;
    }

    &:last-child {
      margin-left: auto;
    }
  }
`;

export const Img = styled.img`
  overflow: hidden;
`;