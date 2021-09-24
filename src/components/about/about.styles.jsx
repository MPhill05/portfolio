import styled from "styled-components";
import { Link } from 'react-scroll';

export const AboutContainer = styled.div`
  color: #fff;
  background: #001;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  z-index: 1;
  height: 450px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
`;

export const AboutHeader = styled.h3`
  color: #fff;
  font-size: 48px;
  line-height: 5px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
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

export const AboutP = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: 1.4px;
  padding: 20px 0;
  margin-bottom: 16px;
`;

export const AboutBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonOne = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#fff' : '#000')};
  white-space: nowrap;
  cursor: pointer;
  margin: 0 20px;
`;

export const ButtonTwo = ButtonOne;

export const ImgColumn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TechIcon = styled.div`
width: 50%;
margin-left: 100px;
  ${'' /* max-width: 100px; */}
  height: 100%;
`;