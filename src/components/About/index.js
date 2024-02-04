import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact, 
  faNode
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faArrowCircleRight, faArrowRight, faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <section id = "about" className="container about-page">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        />
      </h1>
      <div className="flex-div">
        <div className="text-zone">
            <p>
              My name is Haresh Ramasamy, and I am a passionate Software Engineer, driven towards building
              scalable Software to tackle complex real-world problems. My interest in Software Engineering
              began in the final year of my Undergraduate studies, when I made a simple 
              portfolio project for my brother using vanilla HTML, CSS, and JavaScript. Later, I built a 
              Canteen Management System application using Java, and this application made me realise the potential of 
              Object Oriented Programming.
            </p>
            <p>
              I have two years of experience working at Accenture as Advanced App. Engineering Analyst,
              where I honed my skills as a Java Full Stack Developer.
              A couple of things I learnt from this work experience are: i). I simply love coding, and ii). I enjoy 
              coming up with solutions in a fast-paced environment.
            </p>
            <p>            
              Currently, I am pursuing my Masters in Software Engineering Systems at Northeastern University.
              I am working on both frontend and backend projects, to enhance my skillset as a
              Full stack web developer. 
            </p>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
            <div className='skills-list'>
              <ul>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        JavaScript
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        TypeScript
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                          React
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        Node.js
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        MongoDB
                      </div>
                  </li>
              </ul>
              <ul>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        Java
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        Spring Boot
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        Hibernate
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        MySQL
                      </div>
                  </li>
                  <li>
                      <div>
                      <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                      </div>
                      <div>
                        AWS EC2
                      </div>
                  </li>
              </ul>
            </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
