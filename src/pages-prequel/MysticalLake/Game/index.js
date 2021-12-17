import React from 'react';
import Navbar from '../../../components/Navbar';
import { Container, MainContainer } from './GameElements';


const MysticalLakeGame = () => {

  return (
    <>
      <Navbar/>
      <MainContainer>
        <Container>
          <h1>Mystical Lake</h1>
        </Container>
      </MainContainer>
    </>
  );
}

export default MysticalLakeGame;