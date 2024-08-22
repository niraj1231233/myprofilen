import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {
  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Frontend Designer",
    "Web Designer",
    "UI / UX Designer",
    "Web Developer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];
      
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);


  return (
    <section className="home" id="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={process.env.PUBLIC_URL + '/home.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-content">
        <h1>Hi, It's <span>Niraj</span></h1>
        <h3 className="text-animation">I am a <span>{text}</span><span className="cursor">|</span></h3>
        <p> a passionate Full Stack Developer with expertise in building robust web applications using ReactJS and a
                diverse range of modern technologies. With a strong foundation in both front-end and back-end
                development, I create seamless and dynamic user experiences.</p>
        <div className="social-icons">
          <a href="#" onClick={() => handleNavigation('https://www.linkedin.com/in/niraj-sonawane')}><i className='bx bxl-linkedin'></i></a>
          <a href="#" onClick={() => handleNavigation('https://github.com/niraj1231233')}><i className='bx bxl-github'></i></a>
          <a href="#" onClick={() => handleNavigation('https://www.instagram.com/niraj11687/')}><i className='bx bxl-instagram'></i></a>
          <a href="#" onClick={() => handleNavigation('https://x.com/NirajSonawane1')}><i className='bx bxl-twitter'></i></a>
        </div>
        <div className="btn-group">
          <a href="#" className="btn">Hire</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
      <div className="home-img">
      <img src={process.env.PUBLIC_URL + '/niraj.png'} alt="Niraj" />
      </div>
    </section>
  );
};

export default Home;
