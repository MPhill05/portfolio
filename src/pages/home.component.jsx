import React from 'react';
import AboutSection from '../components/about/about.component';
import ContactSection from '../components/contact/contact.component';
import Footer from '../components/footer/footer.component';
import IntroSection from '../components/intro/intro.component';
import ProjectsSection from '../components/projects/projects.component';
import { blkGold, phillstack, bmbxCtrl, shopJW } from '../components/projects/projectData.js';

const Home = () => {

  return (
    <>
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