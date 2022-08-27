import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Work from './components/Work';


class App extends Component {
  render(){
    return (
      <div>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
        </nav>
          <section id="about"><About /></section>
          <div id="contact"><Contact /></div>
          <div id="experience"><Experience /></div>
          <div id="work"><Work /></div>
      </div>

    );
  }
}

export default App;
