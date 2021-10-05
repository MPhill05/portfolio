import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: #001;
  height: 600px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  z-index: 1;
  height: 45vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 1fr);
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
  margin-bottom: 35px;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin: 15px 0;
  padding: 80px 5px;
  grid-area: col2;
`;

export const SomeTech = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 5px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 35px;
  text-align: center;
  padding-left: 90px;
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

export const ImgColumn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TechIcon = styled.div`
  width: 50%;
  margin-left: 100px;
  height: 100%;
  padding: 20px;
  padding-top: 50px;
  text-align: center;

  .html5,
  .css3,
  .sass,
  .react,
  .bootstrap,
  .aws,
  .js,
  .node,
  .github,
  .docker {
    height: 25px;
    width: 30px;
  }

  .html5:hover {
    color: #e34c26;
  }

  .css3:hover {
    color: #264de4;
  }

  .sass:hover {
    color: #cc6699; 
  }

  .react:hover {
    color: #61DBFB;
  }

  .aws:hover {
    color: #ff9900;
  }

  .js:hover {
    color: #f0db4f;
  }

  .bootstrap:hover {
    color: #563d7c;
  }

  .node:hover {
    color: #3c873a;
  }

  .github:hover {
    color: #4078c0;
  }

  .docker:hover {
    color: #0db7ed;
  }
`;