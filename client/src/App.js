import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Foooter/Footer';
import Header from './Container/Header/Header';
import About from './Container/About/About';
import Work from './Container/Work/Work';
import Skill from './Container/Skill/Skill';
const App = () => {
  console.log(process.env.REACT_APP_SANITY_PROJECT_ID,"project id")
  return (
    <div className="app">
         <Navbar />
         <Header />
         <About />
         <Work />
         <Skill />
         <Footer />
    </div>
  )
}

export default App