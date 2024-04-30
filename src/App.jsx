import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Roasters from './components/Roasters';
import CrystalClearPools from './components/Pools';
import Earth from './components/Earth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0); 

  return (
    <Router>
      <Header /> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/roasters" element={<Roasters />} />
          <Route path="/pools" element={<CrystalClearPools />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


