
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Work from './components/Work';
import Navbar from './components/Navbar';
import './index.css';



function App() {
    return (
      <div>
        <Navbar />
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
        </div>
        <footer>
          <a className="footer-a" href="https://github.com/Denimwearer/">
            <div className="footer-div">Created by Cordero Dixon</div>
          </a>
        </footer>
      </div>

    );
  }
export default App;
