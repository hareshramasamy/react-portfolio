import './index.scss'
import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faProjectDiagram, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {act} from '@testing-library/react';


const Sidebar  = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for sidebar
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;
  
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    const handleNavClick = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setIsSidebarOpen(!isSidebarOpen);
      }    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);
    
      const navClass = visible ? 'nav-bar' : 'nav-bar hidden';
      const sidebarClass = isSidebarOpen ? 'sidebar-open' : ''; // New class for sidebar visibility

      return (
      <div className={`${navClass}`}>
        <div className="hamburger-icon" onClick={handleNavClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    <nav className={`nav-links ${sidebarClass}`}>
        <a href = "#home" className = "home-link" onClick={handleNavClick}>
            <FontAwesomeIcon icon = {faHome} color = "4d4d4e"/>
            <span className = "nav-text">HOME</span>
        </a>
        <a href = "#about" className = "about-link" onClick={handleNavClick}>
            <FontAwesomeIcon icon = {faUser} color = "4d4d4e"/>
            <span className = "nav-text">ABOUT</span>
        </a>
        <a href = "#work-experience" className = "work-experience-link" onClick={handleNavClick}>
            <FontAwesomeIcon icon = {faBriefcase} color = "4d4d4e"/>
            <span className = "nav-text">WORK EXPERIENCE</span>
        </a>
        <a href = "#projects" className = "projects-link" onClick={handleNavClick}>
            <FontAwesomeIcon icon = {faProjectDiagram} color = "4d4d4e"/>
            <span className = "nav-text">PROJECTS</span>
        </a>
        <a href = "#contact" className = "contact-link" onClick={handleNavClick}>
            <FontAwesomeIcon icon = {faEnvelope} color = "4d4d4e"/>
            <span className = "nav-text">CONTACT</span>
        </a>
    </nav>
</div>
);
      };

export default Sidebar