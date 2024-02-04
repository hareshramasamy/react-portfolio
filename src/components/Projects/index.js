import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Project from '../Project'
import projects from './projects'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const cards =  projects.map(item => {
    return (
      <Project
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <section id = "projects" className="container projects-page">
        <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P','r', 'o','j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
        </div>
        <section className = "projects-list">
          {cards}
        </section>
    </section>
  )
}

export default Projects;