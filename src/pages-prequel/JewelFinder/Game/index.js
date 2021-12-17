import React from 'react';
import Navbar from '../../../components/Navbar';
import { Container, MainContainer } from './GameElements';


const PearlDiverGame = () => {

  return (
    <>
      <Navbar/>
      <MainContainer>
        <Container>
          <h1>Magic Pirate Potion</h1>
        </Container>
      </MainContainer>
    </>
  );
}

export default PearlDiverGame;