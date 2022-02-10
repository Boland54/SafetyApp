import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Problem from './components/pages/Problems';
import Accidents from './components/pages/Accidents';
import Committee from './components/pages/Committee';
import Report from './components/pages/Report';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/problem' component={Problem} />
          <Route path='/accidents' component={Accidents} />
          <Route path='/committee' component={Committee} />
          <Route path='/report' component={Report} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
