import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import About from './components/About/About.jsx'
import CarList from './components/CarList/CarList.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Contact from './components/Contact/Contact.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? 
    localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;
  useEffect(() => {
    element.classList.remove(theme === 'light' ? 'dark' : 'light');
    element.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, element]);

  //AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />   
      <Testimonial />
      <Contact />
      <Footer />
      

    </div>
  )
}

export default App