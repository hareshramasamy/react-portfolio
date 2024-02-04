import Sidebar from '../Sidebar/index'
import Home from '../Home/index'
import About from '../About/index'
import Experience from '../Experience/index'
import Projects from '../Projects/index'
import Contact from '../Contact/index'
import './index.scss'
import {
    faGithub,
    faGithubAlt,
    faGithubSquare,
    faLinkedin,
    faSquareGithub
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Layout = () => {
    return <div className="App">
        <Sidebar/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <div class="fixed-icons">
            <a class="icon" href = "https://github.com/hareshramasamy" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} color="#000000" size='xl'/>
            </a>
            <a class="icon" href = "https://www.linkedin.com/in/hareshramasamy/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="#000000" size='xl'/>
            </a>
            <div class="vertical-line"></div>
        </div>
        <div class="contact-info">
            <a class="vertical-email" href = "mailto:ramasamy.h@northeastern.edu" target="_blank" rel="noreferrer">
                ramasamy.h@northeastern.edu
            </a>
            <div class="line"></div>
        </div>
    </div>
}

export default Layout