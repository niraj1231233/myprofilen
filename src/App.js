import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState('style.css');

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.setAttribute('href', `${process.env.PUBLIC_URL}/csssfiles/${theme}`);
    }
  }, [theme]);

  return (
    <div className="App">
       <link id="theme-link" rel="stylesheet" href={`${process.env.PUBLIC_URL}/csssfiles/${theme}`} />
      <Header switchTheme={switchTheme} />
      <Home />
      <Education />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
