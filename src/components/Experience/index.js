import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <section id = "work-experience" className="container experience-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E','x', 'p','e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}
              />
            </h1>
            <ul className = "company-ul">
              <li>
                <a href = "https://www.accenture.com/us-en" target="_blank" rel="noreferrer">
                  <div className = "company-container">
                    <div className="timeline-div">
                      <div>
                        Jan 2022 - Jul 2023 
                      </div>
                    </div>
                    <div className="experience-div">
                      <div className="role-title">
                        Advanced App. Engineering Analyst - Accenture
                      </div>
                      <div className="location-div">
                        Chennai, India
                      </div>
                      <ul className="exp-pt-ul">
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>
                        Enhanced the efficiency of payment processing by utilizing a file transfer method for processing payments, enabling
                        simultaneous processing of up to 10,000 payments, replacing a single payment portal
                        </div>
                        </li>
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>
                        Spearheaded the Back-end team to develop RESTful APIs to handle complex UI and excel template validations
                        </div>
                        </li>
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>
                        Applied Factory Design Pattern in Java to handle file uploads, reducing code modifications by 40% when accom
                        modating new file types, and thus improving code maintainability                      
                        </div>
                        </li>
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>
                        Optimized SQL queries by using indexes, specifically tailored to handle large datasets, thereby minimizing potential
                        SQL Exceptions and increasing query performance by 50%                   
                        </div>
                        </li>
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Identified root cause of critical/prod bugs, and provided timely fixes, addressed build failures, maximized JUnit
                        coverage, and ensured zero-defect code delivery  
                        </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href = "https://hexaware.com/" target="_blank">
                  <div className = "company-container">
                    <div className="timeline-div">
                      <div>
                        Aug 2021 - Jan 2022
                      </div>
                    </div>
                    <div className="experience-div">
                      <div className="role-title">
                        Software Engineer Trainee - Hexaware Technologies
                      </div>
                      <div className="location-div">
                        Chennai, India
                      </div>
                      <ul className="exp-pt-ul">
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Received ”Best trainee of the batch” award for demonstrating technical proficiency and professionalism
                        </div>
                        </li>
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Led a 3-person team to compete in the Hexaware’s ”Mavericks Hackathon” securing 3rd place among 30 con-
                        tending groups for designing a talent management website                      
                        </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
        </div>
    </section>
  )
}

export default Experience;