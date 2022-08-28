import React, {Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Work from './components/Work';


class App extends Component {
  render(){
    return (
      <div>
        <nav>
          <a className="w3-xlarge fa fa-home" href="/"></a>
          <a className="active" href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a className="resume-button" href="/Resume_2022.pdf">Resume</a>
        </nav>
      <div>
        <section className="header-section">
          <h1>Hello, my name is</h1>
          <h2 className="big-heading"> Cordero Dixon.</h2>
          <h3 className="big-heading">I assemble web apps.</h3>
          <p className="heading-paragraph">I'm a software engineer working on both the front and back-end. Currently, I'm doing some freelance work.</p>
        </section>
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
