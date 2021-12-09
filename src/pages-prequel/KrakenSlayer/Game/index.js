import React from 'react';
import Navbar from '../../../components/Navbar';
import { Container, MainContainer } from './GameElements';


const KrakenSlayerGame = () => {

  return (
    <>
      <Navbar/>
      <MainContainer>
        <Container>
          <h1>Kraken Slayer Game</h1>
        </Container>
      </MainContainer>
    </>
  );
}

export default KrakenSlayerGame;