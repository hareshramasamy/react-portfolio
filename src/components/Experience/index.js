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
                <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer">
                  <div className="company-container">
                    <div className="timeline-div">
                      <div>Sept 2025 - Dec 2025</div>
                    </div>
                    <div className="experience-div">
                      <div className="role-title">
                        Graduate Teaching Assistant - Northeastern University
                      </div>
                      <div className="location-div">
                        Boston, MA, USA · Part-time
                      </div>
                      <ul className="exp-pt-ul">
                        <li>
                          <div><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /></div>
                          <div>Assisted 38 graduate students in mastering Enterprise Software Design concepts including Java Servlets, JSPs, Hibernate ORM, Spring Framework, and MVC architecture</div>
                        </li>
                        <li>
                          <div><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /></div>
                          <div>Conducted weekly lab sessions and TA hours, providing personalized guidance on conceptual understanding and code-level debugging for Java EE and Spring-based web applications</div>
                        </li>
                        <li>
                          <div><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /></div>
                          <div>Graded assignments, quizzes, and exams with detailed technical feedback to support student learning and maintain evaluation consistency</div>
                        </li>
                        <li>
                          <div><FontAwesomeIcon icon={faArrowRight} color="#c8102f" /></div>
                          <div>Collaborated with Professor Ozbek to uphold course quality, manage lab logistics, and enforce academic-integrity and attendance policies</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href = "https://www.nokia.com/" target="_blank">
                  <div className = "company-container">
                    <div className="timeline-div">
                      <div>
                        Sept 2024 - Dec 2024
                      </div>
                    </div>
                    <div className="experience-div">
                      <div className="role-title">
                        Software as a Service Coop - Nokia
                      </div>
                      <div className="location-div">
                        Sunnyvale, CA, USA
                      </div>
                      <ul className="exp-pt-ul">
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Built a billing portal from scratch using Java Spring Boot and ReactJS, integrated with Nokia’s Event Driven Automation (EDA) SaaS to manage purchase orders, license RTUs, automated invoicing, and revenue tracking
                        </div>
                        </li>
                        <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Collaborated with domain experts and stakeholders to gather evolving requirements and delivered configurable backend logic and dashboards for billing and license insights                     
                        </div>
                        </li>
                                                <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Customized and integrated Nokia React UI components to ensure consistent user experience and branding across the webapp, while managing application state with Redux                     
                        </div>
                        </li>
                                                <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Secured APIs using JWT-based authentication via Azure AD with role-based access (Admin vs Customer) and triggered event-driven alerts using Spring Boot Mail                     
                        </div>
                        </li>
                                                <li>
                        <div>
                          <FontAwesomeIcon icon={faArrowRight} color="#c8102f" />
                        </div>
                        <div>                      
                        Authored Swagger/OpenAPI docs and internal platform documentation; created UML diagrams, system design and entity relationships to ensure clarity in data flow and maintainability                     
                        </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
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