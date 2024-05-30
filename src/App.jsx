import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Footer from './components/Footer';
//import { BrowserRouter,Switch, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div className='bg-cyan-950 w-full h-full text-white px-10 py-6'>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Skills />
      <Footer />
    </div>
  )
}

export default App