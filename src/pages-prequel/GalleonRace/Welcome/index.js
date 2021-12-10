import React, {useState} from 'react';
import Navbar from '../../../components/Navbar';
import { ContainerBG,Container, Paragraph, Title, SubParagraph, SubPlay, SubWin, ButtonsDiv, PlayNow, HowToPlayBtn, 
} from './GalleonWelcome';

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
          <Paragraph>
            <Title>Galleon Race</Title>
            <SubParagraph>
              There are lots of galleon racing towards Treasure Town. Bet on who will reach it first.
            </SubParagraph>
            <SubPlay>1 $UST = 1 PLAY</SubPlay>
            <SubWin>Win as much as _____</SubWin>
            <ButtonsDiv>
              <PlayNow to='play'>PLAY NOW</PlayNow>
              <HowToPlayBtn onClick={openHowToPlayModal}>HOW TO PLAY</HowToPlayBtn>
            </ButtonsDiv>
          </Paragraph>
        </Container>
      </ContainerBG>
    </>
  );
}

export default GalleonRaceWelcome;