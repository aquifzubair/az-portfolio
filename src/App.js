import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </div>
    </HelmetProvider>
  );
}

export default App;
