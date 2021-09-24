import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #000;
  background: #f9f9f9;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ProjectName = styled.div`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  &.large {
    width: 200px;
  }
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;