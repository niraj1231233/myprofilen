import React from 'react';

const Footer = () => {
    const handleNavigation = (url) => {
        window.open(url, "_blank");
      };
  return (
    <footer className="footer">
      <div className="social">
          <a href="#footer" onClick={() => handleNavigation('https://www.linkedin.com/in/niraj-sonawane')}><i className='bx bxl-linkedin'></i></a>
          <a href="#footer" onClick={() => handleNavigation('https://github.com/niraj1231233')}><i className='bx bxl-github'></i></a>
          <a href="#footer" onClick={() => handleNavigation('https://www.instagram.com/niraj11687/')}><i className='bx bxl-instagram'></i></a>
          <a href="#footer" onClick={() => handleNavigation('https://x.com/NirajSonawane1')}><i className='bx bxl-twitter'></i></a>
      </div>
      <ul className="list">
        <li><a href="#services">Services</a></li>
        <li><a href="#home">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonials">Projects</a></li>
      </ul>
      <p className="copyright">
        © Niraj Sonawane | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
