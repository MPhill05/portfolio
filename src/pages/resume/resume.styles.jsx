import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResumeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ResumeImage = styled.img`
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ResumeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;