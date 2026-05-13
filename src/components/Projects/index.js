import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Project from '../Project'
import projects from './projects'
import './index.scss'

const ALL = 'All'
const TAGS = [ALL, 'Featured', 'AI & ML', 'Full Stack', 'Database', 'Systems', 'Frontend']

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeTag, setActiveTag] = useState(ALL)

  const filtered = projects.filter(p => {
    if (activeTag === ALL) return true
    if (activeTag === 'Featured') return p.featured
    return p.tags.includes(activeTag)
  })

  return (
    <section id="projects" className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P','r','o','j','e','c','t','s']}
            idx={15}
          />
        </h1>
      </div>
      <div className="projects-filter">
        {TAGS.map(tag => (
          <button
            key={tag}
            className={`filter-btn${activeTag === tag ? ' active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <section className="projects-list">
        {filtered.map(item => (
          <Project key={item.id} {...item} />
        ))}
      </section>
    </section>
  )
}

export default Projects;
