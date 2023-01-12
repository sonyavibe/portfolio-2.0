import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>

      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
