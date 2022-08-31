
class Work extends React.Component {

  projects = [
    { name:"Quitter",
      description: "Social media app for the non-committal type. Feel free to communicate with everyone on Quitter about the things that you've failed to get done. We would love to chat... wait, I'm just going to stop there. I've told you enough.",
      technologies: ["React", "Ruby on Rails", "Postgres", "JavaScript", "HTML", "CSS"],
      links:["https://github.com/Denimwearer/Quitter", "https://quitter-app.herokuapp.com/"],
      picture: "Quitter.png"
    },

    { name:"Quitter",
      description: "Social media app for the non-committal type. Feel free to communicate with everyone on Quitter about the things that you've failed to get done. We would love to chat... wait, I'm just going to stop there. I've told you enough.",
      technologies: ["React", "Ruby on Rails", "Postgres", "JavaScript", "HTML", "CSS"],
      links:["https://github.com/Denimwearer/Quitter", "https://quitter-app.herokuapp.com/"],
      picture: "Quitter.png"
    }
  ]
  render(){
    return (
      <div>
        {this.projects.map(project => {
          return (
            <h2 className="heading">Work</h2>
            <a href="https://quitter-app.herokuapp.com/">{project.name}</a>
          )
        })}
      </div>
    )
  }
}


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
                <h3 className="project-title">
                  <a href="https://quitter-app.herokuapp.com/">Quitter</a>
                </h3>
                <div className="project-description">
                  <p>Social media app for the non-committal type. Feel free to communicate with everyone on Quitter about the things that you've failed to get done. We would love to chat... wait, I'm just going to stop there. I've told you enough.</p>
                </div>
                <ul className="technologies-used-list">
                  <li>React</li>
                  <li>Ruby on Rails</li>
                  <li>Postgres</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className="project-links">
                  <a href="https://github.com/Denimwearer/Quitter"><i className="fa-brands fa-github"></i></a>
                  <a href="https://quitter-app.herokuapp.com/"><i className="fa-solid fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a className="project-image-link" href="https://quitter-app.herokuapp.com/">
                <div className="image-wrapper image-wrapper-constrained image">
                  <div className="work-image-div">
                    <img src="Quitter.png" alt="quitter"></img>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Work;
