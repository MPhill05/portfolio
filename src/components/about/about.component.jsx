import React from 'react';

import { Button } from '../button.styles';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaJs,
  FaBootstrap
} from 'react-icons/fa'
import {
  AboutContainer,
  AboutContent,
  AboutInfoRow,
  AboutHeader,
  Column1,
  Column2,
  AboutP,
  SomeTech,
  AboutBtnWrapper,
  ImgColumn,
  TechIcon
} from './about.styles';

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <AboutContent>
        <AboutInfoRow>
          <Column1>
            <AboutHeader>
              About Me
            </AboutHeader>
            <AboutP>
              Hi! I'm Mark Phillips, a self-taught Full-Stack Web Developer proficient in JavaScript, various frameworks and libraries.
              <br />
              <br />
              I have experience working as a freelance developer, working directly with customers to create web applications with over 10,000 active users and consistently delivering quality work.
            </AboutP>
            <AboutBtnWrapper>
              <Button
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Contact Me
              </Button>
            </AboutBtnWrapper>
          </Column1>
          <Column2>
            <SomeTech>Tech I Use</SomeTech>
            <ImgColumn>
              <TechIcon>
                <FaHtml5 className='html5' />
              </TechIcon>
              <TechIcon>
                <FaCss3Alt className='css3' />
              </TechIcon>
              <TechIcon>
                <FaJs className='js' />
              </TechIcon>
            </ImgColumn>
            <ImgColumn>
              <TechIcon>
                <FaBootstrap className='bootstrap' />
              </TechIcon>
              <TechIcon>
                <FaSass className='sass' />
              </TechIcon>
              <TechIcon>
                <FaReact className='react' />
              </TechIcon>
            </ImgColumn>
            <ImgColumn>
              <TechIcon>
                <FaNodeJs className='node' />
              </TechIcon>
              <TechIcon>
                <FaAws className='aws' />
              </TechIcon>
              <TechIcon>
                <FaGithub className='github' />
              </TechIcon>
              <TechIcon>
                <FaDocker className='docker' />
              </TechIcon>
            </ImgColumn>
          </Column2>
        </AboutInfoRow>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection;