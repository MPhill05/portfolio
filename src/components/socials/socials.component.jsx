import React from 'react'
import {
  SocialIcons,
  SocialIconLink,
  LinkedInBox,
  GithubBox,
  TwitterBox,
  ResumeBox
} from './socials.styles';
import {
  FaLinkedin,
  FaGithub,
  FaAddressCard,
  FaTwitter
} from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <SocialIcons>
      <GithubBox>
        <SocialIconLink
          href='https://github.com/mphill05'
          target='_blank'
          aria-label='Github'>
          <FaGithub className='github' />
        </SocialIconLink>
      </GithubBox>
      <LinkedInBox>
        <SocialIconLink
          className='liLogo'
          href='https://linkedin.com/in/mphill05'
          target='_blank'
          aria-label='Linkedin'>
          <FaLinkedin className='linkedin' />
        </SocialIconLink>
      </LinkedInBox>
      <TwitterBox>
        <SocialIconLink
          href='https://twitter.com/mphill05'
          target='_blank'
          aria-label='Twitter'>
          <FaTwitter className='twitter' />
        </SocialIconLink>
      </TwitterBox>
      <ResumeBox>
        <SocialIconLink
          href='../../assets/MarkPhillipsWeb.pdf'
          target='_blank'
          download
          aria-label='Resume'>
          <FaAddressCard className='resume' />
        </SocialIconLink>
      </ResumeBox>
    </SocialIcons>
  )
}

export default SocialLinks;