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
          <a className="active" href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <h1>Hello, my name is</h1>
          <h1> Cordero Dixon.</h1>
          <h3> I assemble things for the web.</h3>
          <section id="about" className="about-section"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="work"><Work /></section>
          <section id="contact" className="contact-section"><Contact /></section>
          <h1>Created by Cordero Dixon</h1>
        </div>
      </div>

    );
  }
}

export default App;
