import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './app/components/error';
import { overrideConsole } from './app/services/utility.service';
import Routes from './app/routes';
import './styles/classes.scss';

const App = () => {
  const { REACT_APP_ENV: env } = process.env;
  useEffect(() => {
    if (env !== 'local') {
      overrideConsole();
    }
  }, []);
  return (
    <div className="absolute width height museo" id="body">
      <ErrorBoundary>
        <div className="absolute width height">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
