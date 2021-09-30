import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  WebsiteRights,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <WebsiteRights>
          <a href='https://phillstack.com'>Phillstack</a> &copy; {new Date().getFullYear()}. All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
