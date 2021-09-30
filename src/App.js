import React, { useState } from 'react';

import Home from './pages/home.component';
import ResumeComponent from './pages/resume/resume.component';
import Navbar from './components/navbar/navbar.component';
import DropMenu from './components/dropmenu/dropmenu.component';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/footer.component';
import SocialLinks from './components/socials/socials.component';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
    <DropMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SocialLinks />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/resume' component={ResumeComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;