import React from 'react';
import Navbar from '../../../components/Navbar';
import { Container, MainContainer } from './GameElements';


const GalleonRaceGame = () => {

  return (
    <>
      <Navbar/>
      <MainContainer>
        <Container>
          <h1>Galleon Race Game</h1>
        </Container>
      </MainContainer>
    </>
  );
}

export default GalleonRaceGame;