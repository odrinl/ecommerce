import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainArea from './components/MainArea';
import ErrorBoundary from './errorHandling/ErrorBoundary';

import './App.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        {/* Use JSX fragment instead of a div */}
        <>
          <div className='App'>
            <NavBar />
            <MainArea />
          </div>
        </>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
