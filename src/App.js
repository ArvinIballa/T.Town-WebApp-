import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages-others/Home'
import WelcomePrequel from './pages-prequel/WelcomePrequel'
import KrakenSlayer from './pages-prequel/KrakenSlayer'
import GalleonRace from './pages-prequel/GalleonRace'
import Error404 from './pages-others/Error404'
import { openHomePage } from './components/global_vars';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={openHomePage ? <Home/> : <Navigate to='/prequel'/>} exact/>
        <Route path='/prequel' element={<WelcomePrequel/>} exact/>
        <Route path='/prequel/kraken-slayer' element={<KrakenSlayer/>} exact/>
        <Route path='/prequel/galleon-race' element={<GalleonRace/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
