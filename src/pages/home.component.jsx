import React, { useState } from 'react';
import AboutSection from '../components/about/about.component';
import ContactSection from '../components/contact/contact.component';
import DropMenu from '../components/dropmenu/dropmenu.component';
import Footer from '../components/footer/footer.component';
import IntroSection from '../components/intro/intro.component';
import Navbar from '../components/navbar/navbar.component';
import ProjectsSection from '../components/projects/projects.component';
import { blkGold, phillstack, bmbxCtrl, shopJW } from '../components/projects/projectData.js';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DropMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <IntroSection />
      <AboutSection />
      <ProjectsSection {...blkGold} />
      <ProjectsSection {...phillstack} />
      <ProjectsSection {...bmbxCtrl} />
      <ProjectsSection {...shopJW} />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home;