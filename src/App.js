import React from 'react';
import { UIRouter, UIView } from '@uirouter/react';
import ErrorBoundary from './app/components/error/ErrorBoundary';
import Menu from './app/components/navbtn/Menu';
import * as state from './app/services/state.service';
import './styles/classes.scss';

const App = () => {
  return (
    <div className="absolute width height museo" id="body">
      <ErrorBoundary>
        <UIRouter
          plugins={state.plugins}
          states={state.states}
          config={state.configRouter}
        >
          <div>
            <Menu />

            <div className="absolute width height cutoff">
              <UIView />
            </div>
          </div>
        </UIRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
