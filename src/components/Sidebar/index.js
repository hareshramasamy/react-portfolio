import './index.scss'
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faProjectDiagram, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Sidebar  = () => (
<div className = 'nav-bar'>
    <nav>
        <NavLink exact = "true" activeclassname = "active" to = "/">
            <FontAwesomeIcon icon = {faHome} color = "4d4d4e"/>
            <span className = "nav-text">HOME</span>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" to = "/about" className = "about-link">
            <FontAwesomeIcon icon = {faUser} color = "4d4d4e"/>
            <span className = "nav-text">ABOUT</span>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" to = "/work-experience"  className ="work-experience-link">
            <FontAwesomeIcon icon = {faBriefcase} color = "4d4d4e"/>
            <span className = "nav-text">WORK EXPERIENCE</span>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" to = "/projects"  className ="projects-link">
            <FontAwesomeIcon icon = {faProjectDiagram} color = "4d4d4e"/>
            <span className = "nav-text">PROJECTS</span>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" to = "/contact"  className ="contact-link">
            <FontAwesomeIcon icon = {faEnvelope} color = "4d4d4e"/>
            <span className = "nav-text">CONTACT</span>
        </NavLink>
    </nav>
</div>
)

export default Sidebar