import styled from 'styled-components';
import { useState } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
        <Hero/>
        <About/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
