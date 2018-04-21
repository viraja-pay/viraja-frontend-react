import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={AboutUs} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </main>
)

export default Main;