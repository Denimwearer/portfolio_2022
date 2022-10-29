import React from 'react';


class About extends React.Component {
  render(){
    return (
      <div className="inner">
        <div className="about-div">
          <h2 className="heading">About Me</h2>
          <div>
            <p>Yo! My name is Cordero. My interest in web development started back in summer of 2018, so I took a course at General Assembly that taught me my skills.</p>
            <p>Technologies I work with:</p>
          </div>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Ruby on Rails</li>
            <li>jQuery</li>
            <li>MongoDB</li>
            <li>Angular.js</li>
            <li>Postgres</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="picture-div">
          <div className="wrapper">
            <div className="image-wrapper">
              <div className="about-image-div">
                <img alt="profile" src="bahamas.jpeg"></img>
              </div>
        <div>
        </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
