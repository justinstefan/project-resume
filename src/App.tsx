import React from 'react';
import './App.css';

import { default as Header } from './sections/Header'
import { default as About } from './sections/About'
import { default as Portfolio } from './sections/Portfolio'
import { default as Work } from './sections/Work'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Work />
    </div>
  );
}

export default App;
