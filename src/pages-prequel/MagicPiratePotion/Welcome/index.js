import React, {useState, useEffect} from 'react';
import Navbar from '../../../components/Navbar';
import { ContainerBG, Container, ContainerLeft, ContainerRight, 
  GameTitleDiv, GameTitle, GameDescriptionDiv, GameDescription, 
  GameCostDiv, GameCostWrapper, GameCost, 
  GameButtonDiv, GameButton1, GameButton2, GameImage, GameReward, GameRewardWrapper
} from './WelcomeElements';
import {IMAGES} from '../../../assets'
import HowToPlay from './HowToPlay';

const MagicPiratePotionWelcome = () => {

  // open how to play modal
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const openHowToPlayModal = () => {setShowHowToPlayModal(true)}
  const closeHowToPlayModal = () => {setShowHowToPlayModal(false)}

  // check width
  const [width, setWidth] = useState(window.innerWidth);
  const updateWindow = () => {
    setWidth(window.innerWidth)
  }

  // use effect
  useEffect(() => {
    updateWindow();
    window.addEventListener("resize", updateWindow);
    return () => {
      window.removeEventListener("resize", updateWindow);
    }
  }, [])

  return (
    <>
    <HowToPlay showHowToPlayModal={showHowToPlayModal} closeHowToPlayModal={closeHowToPlayModal}/>
    <Navbar/>

    <ContainerBG>
      <Container>
        {width < 900 ? null :
        <ContainerLeft>
          
        </ContainerLeft>
        }
        <ContainerRight>
          <GameTitleDiv>
            <GameTitle color={0}>MAGIC PIRATE</GameTitle>
            <GameTitle color={1}>POTION</GameTitle>
          </GameTitleDiv>
          <GameDescriptionDiv>
            <GameDescription design={0}>Pirates need potion too for longevity. Revitalize your pirates through trying to craft the Magic Pirate Potion.</GameDescription>
            <GameDescription design={1}>#TreasureTown #NFTGame #PlayToEarn</GameDescription>
          </GameDescriptionDiv>

          <GameCostDiv>
            <GameCostWrapper>
              <GameCost>1 UST = 1 play</GameCost>
              <GameCost>Win as much as ____</GameCost>
              <GameRewardWrapper>
              <GameReward>+experience</GameReward>
              <GameReward>+Magic Pirate Potions</GameReward>
            </GameRewardWrapper>
            </GameCostWrapper>
          </GameCostDiv>

          <GameButtonDiv>
            <GameButton1 to="play">Play Game</GameButton1>
            <GameButton2 onClick={openHowToPlayModal}>How to Play</GameButton2>
          </GameButtonDiv>

        </ContainerRight>
      </Container>
    </ContainerBG>
    </>
  );
}

export default MagicPiratePotionWelcome ;