import React from 'react';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass
} from 'react-icons/fa'
import {
  AboutContainer,
  AboutContent,
  AboutInfoRow,
  AboutHeader,
  Column1,
  Column2,
  AboutP,
  AboutBtnWrapper,
  ButtonOne,
  ButtonTwo,
  ImgColumn,
  TechIcon
} from './about.styles';

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutInfoRow>
          <Column1>
            <AboutHeader>
              About Me
            </AboutHeader>
            <AboutP>
              Hi! I'm Mark Phillips a self-taught Full-Stack Web Developer proficient in JavaScript, and various frameworks and libraries. Experience working as a freelance developer and working directly with customers to create web applications with over 10,000 active users and consistently deliver quality work.
            </AboutP>
            <AboutBtnWrapper>
              <ButtonOne
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Contact Me
              </ButtonOne>
              <ButtonTwo
                to='/resume'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Resume
              </ButtonTwo>
            </AboutBtnWrapper>
          </Column1>
          <Column2>
            <ImgColumn>
              <TechIcon>
                <FaHtml5 />
              </TechIcon>
              <TechIcon>
                <FaCss3Alt />
              </TechIcon>
              <TechIcon>
                <FaSass />
              </TechIcon>
            </ImgColumn>
            <ImgColumn>
              <TechIcon>
                <FaReact />
              </TechIcon>
              <TechIcon>
                <FaAws />
              </TechIcon>
              <TechIcon>
                <FaNodeJs />
              </TechIcon>
            </ImgColumn>
            <ImgColumn>
              <TechIcon>
                <FaGithub />
              </TechIcon>
              <TechIcon>
                <FaDocker />
              </TechIcon>
            </ImgColumn>
          </Column2>
        </AboutInfoRow>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection;