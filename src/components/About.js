import '../styles/About.css';
import Portrait from '../images/portrait.png';
import Coursework from '../data/coursework.js';
import GPA from '../data/gpa.json';

function About() {
  return (
    <div id="container">
      <p className="header">&lt;About&gt;</p>
      <div className="content">
        <span id="text">
          <p className="about-section">
            I'm an undergraduate student at D.Y. Patil Technical Campus in Computer Science, looking for a full-time job.
          </p>
          <p className="about-section">
            Currently, I'm learning skills and technologies for Full Stack Development, ReactJS, and WordPress development.
          </p>
          <p className="about-section">
            Downloads: <a className="download" href="/resumeUpdated.pdf" download>Resume</a>
          </p>

          <div id="dropdown-content">
            <div className="dropdown-gpa">
              <p className="dropdown-gpa-overall">
                RESULT:
                <span className="dropdown-gpa-grade"> {GPA.overall}</span>
              </p>
              <p className="dropdown-gpa-major">
                DEGG:
                <span className="dropdown-gpa-grade"> {GPA.major}</span>
              </p>
            </div>
            {Coursework.map((course, index) => (
              <p className="dropdown-item" key={index}>
                <span className="dropdown-item-code">{course.code}</span>
                <span className="dropdown-item-title"> {course.title}:</span>
                <span className="dropdown-item-grade"> {course.grade}</span>
              </p>
            ))}
          </div>
        </span>
        <span id="portrait-container">
          <img id="portrait" src={Portrait} alt="portrait" />
        </span>
      </div>
    </div>
  );
}

export default About;
