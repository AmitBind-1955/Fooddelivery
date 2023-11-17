// parent Component 


import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Layout from './Component/Layout';
import Home from "./Pages/Home/Home";
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Shop from './Pages/Home/Shop';
import Blog from './Pages/Home/Blog';
import OurMenu from './Pages/Home/OurMenu';

function App() {
  return (
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/menu" element={<OurMenu />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
  );
}

export default App;
