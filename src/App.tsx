import React from 'react';
import './App.css';
import logo from './logo-js.png'

// import { default as Header } from './sections/Header'
import { default as About } from './sections/About'
import { default as Portfolio } from './sections/Portfolio'
import { default as Work } from './sections/Work'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <header>
        <a href="/" className="App-logo">
          <img height="40" src={logo} alt=""/>
        </a>
        <a href="/about">Intro</a>
        <a href="/work">Projects</a>
        <a href="/contact">Contact</a>
      </header>
      <section className="title">
        <h1>Hi, i'm Justinian Stefan</h1>
        <h2>Web development consultant</h2>
        <h2>Front-end specialist</h2>
      </section>
      <section className="row">
        <div className="column">
        I'm Justin, a full-stack engineer from Romania with almost a decade experience. Lately i'm focusing on ReactJS / Node ecosystem.
        </div>
        <div className="column">
        Throughout that time, I’ve worked onsite and remotely for a number of exciting startups and established companies.
        </div>
        <div className="column">
        These have been located all over Europe, the United States.
        </div>
      </section>
      <About />
      <Portfolio />
      <Work />
    </div>
  );
}

export default App;
