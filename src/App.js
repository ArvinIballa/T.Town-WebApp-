import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages-others/Home'
import WelcomePrequel from './pages-prequel/WelcomePrequel'
import KrakenSlayerWelcome from './pages-prequel/KrakenSlayer/Welcome'
import KrakenSlayerGame from './pages-prequel/KrakenSlayer/Game'
import GalleonRaceWelcome from './pages-prequel/GalleonRace/Welcome'
import GalleonRaceGame from './pages-prequel/GalleonRace/Game'
import Error404 from './pages-others/Error404'
import { openHomePage } from './components/global_vars';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={openHomePage ? <Home/> : <Navigate to='/prequel'/>} exact/>
        <Route path='/prequel' element={<WelcomePrequel/>} exact/>
        <Route path='/prequel/kraken-slayer' element={<KrakenSlayerWelcome/>} exact/>
        <Route path='/prequel/kraken-slayer/play' element={<KrakenSlayerGame/>} exact/>
        <Route path='/prequel/galleon-race' element={<GalleonRaceWelcome/>} exact/>
        <Route path='/prequel/galleon-race/play' element={<GalleonRaceGame/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;