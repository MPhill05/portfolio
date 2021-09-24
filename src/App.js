import React from 'react';

import Home from './pages/home.component';
import Resume from './pages/resume/resume.component';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/resume' component={Resume} exact />
      </Switch>
    </Router>
  );
}

export default App;
