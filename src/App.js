import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return <div className='' >
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>

    <Experience/>
    <Contact/>
    <SocialLinks/>
    <Footer/>
  </div>;
};

export default App;
