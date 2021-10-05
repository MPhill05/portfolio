import React from 'react';

import Home from './pages/home.component';
import ResumeComponent from './pages/resume/resume.component';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/footer.component';

function App() {
  
  return (
    <Router>
    
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/resume' component={ResumeComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;