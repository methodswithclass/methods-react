import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './app/components/error/ErrorBoundary';
import Menu from './app/components/navbtn/Menu';
import Home from './app/states/Home';
import About from './app/states/About';
import Contact from './app/states/Contact';
import What from './app/states/What';
import Blocks from './app/states/Blocks';
import Chris from './app/states/Chris';
import View from './app/states/View';
import * as state from './app/services/state.service';
import './styles/classes.scss';

const Root = () => {
  useEffect(() => {
    state.goto('home');
  }, []);

  return null;
};

const App = () => {
  return (
    <div className="absolute width height museo" id="body">
      <ErrorBoundary>
        <div>
          <Menu />

          <div className="absolute width height cutoff">
            <Router>
              <Switch>
                <Route path="/about/whatwedo/apps">
                  <Blocks type="apps" />
                </Route>
                <Route path="/about/whatwedo/hire">
                  <Blocks type="blocks" />
                </Route>
                <Route path="/about/whatwedo">
                  <View comp={<What />} color="green-back" />
                </Route>
                <Route path="/about">
                  <View comp={<About />} color="blue-back" />
                </Route>
                <Route path="/contact/chris">
                  <Chris />
                </Route>
                <Route path="/contact">
                  <View comp={<Contact />} color="blue4-back" />
                </Route>
                <Route path="/home">
                  <View comp={<Home />} color="green7-back" />
                </Route>
                <Route path="/">
                  <Root />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
