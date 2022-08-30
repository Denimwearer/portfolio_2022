import React from 'react';

class Work extends React.Component {
  render(){
    return (
      <div>
        <h2 className="heading">Work</h2>
        <ul className="work-unordered-list1">
          <li className="work-listed-items1">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3>
                  <a href="https://quitter-app.herokuapp.com/">Quitter</a>
                </h3>
                <div>
                  <p>Quitter is a social media app for the non-committal type. Feel free to communicate with everyone on Quitter about the things that you've failed to get done. We would love to chat... wait, I'm just going to stop there. I've told you enough.</p>
                </div>
                <ul>
                  <li>React</li>
                  <li>Ruby on Rails</li>
                  <li>Postgres</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div>
                  <a href="https://github.com/Denimwearer/Quitter"> </a>
                  <a href="https://quitter-app.herokuapp.com/"> </a>
                </div>
              </div>
            </div>
            <div>
              <a href="https://quitter-app.herokuapp.com/"> </a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Work;
