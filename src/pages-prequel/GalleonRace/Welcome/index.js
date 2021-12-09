import React, {useState, useEffect} from 'react';
import Navbar from '../../../components/Navbar';
import { ContainerBG,Container, Paragraph, SubParagraph,SubPlay, SubWin, PlayNow,HowToPlayy
} from './GalleonWelcome';
import { Link } from 'react-router-dom'

import HowToPlay from './HowToPlay';

const GalleonRaceWelcome = () => {

   // open how to play modal
   const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
   const openHowToPlayModal = () => {setShowHowToPlayModal(true)}
   const closeHowToPlayModal = () => {setShowHowToPlayModal(false)}

  return (
    <>
    <HowToPlay showHowToPlayModal={showHowToPlayModal} closeHowToPlayModal={closeHowToPlayModal}/>
    <Navbar/>
    <ContainerBG>
        <Container>
          <Paragraph>Galleon Race <br/> 
              <SubParagraph>
                There are lots of galleon  racing <br/> towards Treasure Town. Bet on <br/>who will reach it first.
              </SubParagraph>
              <SubPlay>1 $UST = 1 PLAY</SubPlay>
              <SubWin>Win as much as _____</SubWin>
              <PlayNow to='play'>PLAY NOW</PlayNow>
              <HowToPlayy onClick={openHowToPlayModal}>HOW TO PLAY</HowToPlayy>
            </Paragraph>
          
          
          {/* <SubParagraph>There are lots of galleon <br/> racing towards Treasure Town.<br/> Bet on who will reach it first</SubParagraph> */}
       </Container>
      </ContainerBG>
    </>
  );
}

export default GalleonRaceWelcome;