import styled from "styled-components";

export const SocialIcons = styled.div`
  position: absolute;
  top: 40%;
  z-index: 10;
`;

export const SocialIconLink = styled.a`
  display: block;
  box-sizing: inherit;
  color: #fff;
  font-size: 30px;
  padding: 10px 10px;

  .linkedin:hover {
    color: #2867B2;
  }

  .github:hover {
    color: #4078c0;
  }

  .twitter:hover {
    color: #1DA1F2;
  }

  .resume:hover {
    color: #DB4437;
  }
`;