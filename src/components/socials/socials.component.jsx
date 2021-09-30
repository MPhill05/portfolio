import React from 'react'
import {
  SocialIcons,
  SocialIconLink
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
      <SocialIconLink
        className='liLogo'
        href='https://linkedin.com/in/mphill05'
        target='_blank'
        aria-label='Linkedin'>
        <FaLinkedin className='linkedin' />
      </SocialIconLink>
      <SocialIconLink
        href='https://github.com/mphill05'
        target='_blank'
        aria-label='Github'>
        <FaGithub className='github' />
      </SocialIconLink>
      <SocialIconLink
        href='https://twitter.com'
        target='_blank'
        aria-label='Twitter'>
        <FaTwitter className='twitter' />
      </SocialIconLink>
      <SocialIconLink
        to='/resume'
        target='_blank'
        aria-label='Resume'>
        <FaAddressCard className='resume' />
      </SocialIconLink>
    </SocialIcons>
  )
}

export default SocialLinks;