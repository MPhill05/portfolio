import React, { useState } from 'react';
import AboutSection from '../components/about/about.component';
import ContactSection from '../components/contact/contact.component';
import IntroSection from '../components/intro/intro.component';
import ProjectsSection from '../components/projects/projects.component';

import Navbar from '../components/navbar/navbar.component';
import DropMenu from '../components/dropmenu/dropmenu.component';

import { Modal } from '../components/modal/modal';

import SocialLinks from '../components/socials/socials.component';

export var openModal = () => { }

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  openModal = () => {
    setShowModal(prev => !prev)
    document.body.style.overflow = 'hidden';
  }
  
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default Home;