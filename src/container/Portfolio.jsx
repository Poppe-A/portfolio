import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import About from '../components/AboutComponents/About';
import Contact from '../components/Contact';
import Projects from '../components/ProjectsComponents/Projects';
import Header from '../components/Header';

const Portfolio = () => {
  return (
    <div className='portfolio h-full w-full bg-black flex flex-col justify-between pb-4'>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/projets'>
            <Projects />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/'>
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Portfolio;
