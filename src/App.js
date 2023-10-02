import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainArea from './components/MainArea';
import ErrorBoundary from './errorHandling/ErrorBoundary';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <>
          <div className='App'>
            <NavBar />
            <MainArea />
            <Footer />
          </div>
        </>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
