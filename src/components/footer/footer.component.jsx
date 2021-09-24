import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap
} from './footer.styles';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              MP
            </SocialLogo>
            <WebsiteRights>MP &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                className='liLogo'
                href='https://linkedin.com/in/mphill05'
                target='_blank'
                aria-label='Linkedin'>
                <FaLinkedin className='liLogo' />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/mphill05' target='_blank' aria-label='Github'><FaGithub /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
