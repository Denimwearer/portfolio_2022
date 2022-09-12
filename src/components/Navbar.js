import React from 'react';
import { useState } from 'react';


function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);


    return (
      <div>
        <nav className="navigation">
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from Heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li><a className="w3-xlarge fa fa-home active" href="/"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              ></a></li>
              <li><a href="#about"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >About</a></li>
              <li><a href="#experience"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >Experience</a></li>
              <li><a href="#work"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >Work</a></li>
              <li
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              ><a href="#contact">Contact</a></li>
              <div className="resume-div">
                <li><a className="resume-button" href="/Resume_2022.pdf">Resume</a></li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );

}

export default Navbar;
