import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Work extends React.Component {

  projects = [
    { id:1,
      name:"Quitter",
      description: "Social media app for the non-committal type. Feel free to communicate with everyone on Quitter about the things that you've failed to get done. We would love to chat... wait, I'm just going to stop there. I've told you enough.",
      technologies: ["React", "Ruby on Rails", "Postgres", "JavaScript", "HTML", "CSS"],
      links:["https://github.com/Denimwearer/Quitter", "https://quitter-app.herokuapp.com/"],
      picture: "Quitter.png"
    },

    { id:2,
      name:"Playlistr",
      description: "App for creating customizable and social playlist. It uses the Last.fm API to search from a catalog and music and features a filter to allow you to serach for specific keywords in titles or artists.",
      technologies: ["Angular.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "Node.js"],
      links:["https://github.com/Denimwearer/Playlistr", "https://csa-music-app.herokuapp.com/"],
      picture: "Playlistr.png"
    },
    { id:3,
      name:"Calculator",
      description: "Basic calculator with addition, subtraction, multplication and divison functionality.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      links:["https://github.com/Denimwearer/calculator", "https://cal-culator-app-react.netlify.app/"],
      picture: "Calculator.png"
    }
  ]
  render(){
    return (
      <div>
        <h2 className="heading">Work</h2>
        {this.projects.map(project => {
          console.log(project.technologies);
          return (
            <div>
              <ul className="work-unordered-list1">
                <li className="work-listed-items1">
                  <div className="project-content">
                    <div>
                      <p className="project-overline">Project</p>
                      <h3 className="project-title">
                        <a href="https://quitter-app.herokuapp.com/">{project.name}</a>
                      </h3>
                      <div className="project-description">
                        <p>{project.description}</p>
                      </div>
                      <ul className="technologies-used-list">
                        <li key="1">{project.technologies[0]}</li>
                        <li key="2">{project.technologies[1]}</li>
                        <li key="3">{project.technologies[2]}</li>
                        <li key="4">{project.technologies[3]}</li>
                        <li key="5">{project.technologies[4]}</li>
                        <li key="6">{project.technologies[5]}</li>
                        <li key="7">{project.technologies[6]}</li>
                      </ul>
                      <div className="project-links">
                        <a href={project.links[0]}><FontAwesomeIcon icon={faGithub}/></a>
                        <a href={project.links[1]}><FontAwesomeIcon icon={faLink} /></a>
                      </div>
                    </div>
                  </div>
                  <div className="project-image">
                    <a className="project-image-link" href={project.links[1]}>
                      <div className="image-wrapper image-wrapper-constrained image">
                        <div className="work-image-div">
                          <img src={project.picture} alt={project.name}></img>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Work;
