import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #000;
`;

export const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  bottom: 0;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
`;