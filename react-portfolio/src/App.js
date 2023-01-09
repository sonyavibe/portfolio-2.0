import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div>

      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Experience />
      </main>
      
    </div>
  );
}

export default App;
