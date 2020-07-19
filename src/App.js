import React from 'react'
import AboutMe from './components/AboutMe'
import ParticlesBackground from './components/ParticlesBackground'
import Projects from './components/Projects'
import Footer from  './components/Footer'

function App() {
  return (
    <div className="App">
        <ParticlesBackground/>
        <AboutMe/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
