import React from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import About from './components/pages/About';
import Bolog from './components/pages/Bolog';
import Showbolog from './components/pages/Showbolog';
 
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/bolog' element={<Bolog/>}></Route>
      <Route path='/bolog/:head' element={<Showbolog/>}></Route>
      <Route></Route>
     </Routes>
    </BrowserRouter>

    </div>
  );
};

export default App;