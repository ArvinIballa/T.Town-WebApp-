import React from 'react';
import Navbar from '../../../components/Navbar';
import { Container, MainContainer } from './GameElements';


const JewelFinderGame = () => {

  return (
    <>
      <Navbar/>
      <MainContainer>
        <Container>
          <h1>Jewel Finder Game</h1>
        </Container>
      </MainContainer>
    </>
  );
}

export default JewelFinderGame;