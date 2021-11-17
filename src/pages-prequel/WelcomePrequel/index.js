import React from 'react';
import { ContainerBG, Container, MainWrapper, MapWrapper, Map,
  KrakenIcon, GalleonIcon, IconLink
} from './WelcomePrequelElements';
import {IMAGES} from '../../assets'
import Navbar from '../../components/Navbar';

const WelcomePrequel = () => {

  return (
    <>
    
    <ContainerBG>
    <Navbar/>
      <Container>
        <MainWrapper>
          <MapWrapper>

            <IconLink to="galleon-race">
              <GalleonIcon src={IMAGES.galleon_icon} alt="Galleon"/>
            </IconLink>

            <IconLink to="kraken-slayer">
              <KrakenIcon src={IMAGES.kraken_icon} alt="Kraken"/>
            </IconLink>

            <Map src={IMAGES.prequel_map} alt="Map"/>
            
          </MapWrapper>
        </MainWrapper>
      </Container>
    </ContainerBG>
    </>
  );
}

export default WelcomePrequel;