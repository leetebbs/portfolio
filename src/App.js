import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Development from './components/Development';
import Acheivements from './components/Achievements.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Multisig from "./components/projects/mutlisig.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-black overflow-hidden'>
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Acheivements />
        <Work />
        <Contact />
      </div>
      <Routes>
        <Route path="/development" element={<Development />} />
        <Route path="/multisig" element={<Multisig />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
