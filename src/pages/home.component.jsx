import React, { useState } from 'react';
import AboutSection from '../components/about/about.component';
import ContactSection from '../components/contact/contact.component';
import IntroSection from '../components/intro/intro.component';
import ProjectsSection from '../components/projects/projects.component';

import Navbar from '../components/navbar/navbar.component';
import DropMenu from '../components/dropmenu/dropmenu.component';

import SocialLinks from '../components/socials/socials.component';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DropMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SocialLinks />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default Home;