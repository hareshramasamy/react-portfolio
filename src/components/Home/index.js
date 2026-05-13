import './index.scss'
import { useState } from 'react'
import Haresh from '../../assets/images/haresh.jpg'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = [' ', 'H', 'a', 'r', 'e', 's', 'h']

  return (
    <section id="home">
      <div className="container home-page">

        <div className="hero-left">
          <img className="haresh-img" src={Haresh} alt="haresh" />
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Software Engineer &nbsp;·&nbsp; AWS Certified &nbsp;·&nbsp; AI Enthusiast</h2>
          <div className="hero-buttons">
            <a href="#work-experience" className="flat-button">EXPERIENCE</a>
            <a href="#projects" className="flat-button">PROJECTS</a>
            <a href="/HareshResume.pdf" className="flat-button" download>RESUME</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="bio-text">
            <p>
              Software Engineer with 2.5+ years of experience and an M.S. in Software Engineering Systems from Northeastern University. I build scalable, cloud-native, and user-centric applications, with professional experience at <strong>Accenture</strong> and a co-op at <strong>Nokia</strong> delivering production-ready full-stack systems.
            </p>
            <p>
              I've owned end-to-end development of enterprise platforms: RESTful APIs with Spring Boot, responsive frontends with React, and containerized cloud deployments. I also served as a Graduate Teaching Assistant for Enterprise Software Design, mentoring students in Java EE, Spring, and Hibernate.
            </p>
            <p>
              Alongside full-stack work, I actively explore AI, building agentic workflows, RAG systems, and generative AI applications.
            </p>
            <p className="skills-label">Technologies I work with:</p>
            <div className="skills-list">
              <ul>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>Java &amp; Spring Boot</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>React.js / Next.js</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>TypeScript</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>Python</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>PostgreSQL / MySQL</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>AWS (Solutions Architect)</span></li>
              </ul>
              <ul>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>OpenAI Agents SDK</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>RAG &amp; Vector DBs</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>Docker / Kubernetes</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>Hibernate / Drizzle ORM</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>Redux</span></li>
                <li><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /><span>Git / CI-CD</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
