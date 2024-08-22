import React, { useState, useEffect } from 'react';


const Header = ({ switchTheme }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
     
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  

  return (
    <header className="header">
      <nav className="navbar1">
        <button onClick={() => switchTheme('style.css')} className="nav-button neon"></button>
        <button onClick={() => switchTheme('red.css')} className="nav-button red"></button>
        <button onClick={() => switchTheme('violet.css')} className="nav-button violet"></button>
        <button onClick={() => switchTheme('orange.css')} className="nav-button orange"></button>
        <button onClick={() => switchTheme('rainbow.css')} className="nav-button rainbow"></button>
      </nav>
      <a href="#home" className="logo">Niraj <span>Sonawane</span></a>
      <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''}>My Projects</a>
        <a href="#testimonials"  className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
