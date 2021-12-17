import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages-others/Home'
import WelcomePrequel from './pages-prequel/WelcomePrequel'
import KrakenSlayerWelcome from './pages-prequel/KrakenSlayer/Welcome'
import KrakenSlayerGame from './pages-prequel/KrakenSlayer/Game'
import GalleonRaceWelcome from './pages-prequel/GalleonRace/Welcome'
import GalleonRaceGame from './pages-prequel/GalleonRace/Game'
import PearlDiverWelcome from './pages-prequel/PearlDiver/Welcome'
import PearlDiverGame from './pages-prequel/PearlDiver/Game'
import MysticalLakeWelcome from './pages-prequel/MysticalLake/Welcome'
import MysticalLakeGame from './pages-prequel/MysticalLake/Game'
import MagicPiratePotionWelcome from './pages-prequel/MagicPiratePotion/Welcome'
import MagicPiratePotionGame from './pages-prequel/MagicPiratePotion/Game'
import TarotWelcome from './pages-prequel/TarotPirate/Welcome'
import TarotGame from './pages-prequel/TarotPirate/Game'
import JewelFinderWelcome from './pages-prequel/JewelFinder/Welcome'
import JewelFinderGame from './pages-prequel/JewelFinder/Game'
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
        <Route path='/prequel/pearl-diver' element={<PearlDiverWelcome/>} exact/>
        <Route path='/prequel/pearl-diver/play' element={<PearlDiverGame/>} exact/>
        <Route path='/prequel/mystical-lake' element={<MysticalLakeWelcome/>} exact/>
        <Route path='/prequel/mystical-lake/play' element={<MysticalLakeGame/>} exact/>
        <Route path='/prequel/pirate-potion' element={<MagicPiratePotionWelcome/>} exact/>
        <Route path='/prequel/pirate-potion/play' element={<MagicPiratePotionGame/>} exact/>
        <Route path='/prequel/tarot-pirates' element={<TarotWelcome/>} exact/>
        <Route path='/prequel/tarot-pirates/play' element={<TarotGame/>} exact/>
        <Route path='/prequel/jewel-finder' element={<JewelFinderWelcome/>} exact/>
        <Route path='/prequel/jewel-finder/play' element={<JewelFinderGame/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;