import React from 'react';
import Navbar from '../../components/Navbar';
import { ContainerBG,Container, Paragraph, SubParagraph,SubPlay, SubWin, PlayNow
} from './GalleonWelcome';
import { Link } from 'react-router-dom'

const GalleonRace = () => {

  return (
    <>
    <ContainerBG>
      <Navbar/>
        <Container>
          <Paragraph>Galleon Race <br/> 
              <SubParagraph>
                There are lots of galleon  racing <br/> towards Treasure Town. Bet on <br/>who will reach it first.
              </SubParagraph>
              <SubPlay>1 $UST = 1 PLAY</SubPlay>
              <SubWin>Win as much as _____</SubWin>
              <Link to='galleon-race'><PlayNow>PLAY NOW</PlayNow></Link>
            </Paragraph>
          
          
          {/* <SubParagraph>There are lots of galleon <br/> racing towards Treasure Town.<br/> Bet on who will reach it first</SubParagraph> */}
       </Container>
      </ContainerBG>
    </>
  );
}

export default GalleonRace;