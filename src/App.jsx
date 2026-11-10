import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
