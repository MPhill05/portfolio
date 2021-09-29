import React from 'react';
import AboutSection from '../components/about/about.component';
import ContactSection from '../components/contact/contact.component';
import Footer from '../components/footer/footer.component';
import IntroSection from '../components/intro/intro.component';
import ProjectsSection from '../components/projects/projects.component';

const Home = () => {

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home;