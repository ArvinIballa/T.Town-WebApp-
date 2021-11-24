import React, {useState, useEffect} from 'react';
import { ContainerBG, Container, MainWrapper, MapWrapper, Map,
  KrakenIcon, GalleonIcon, IconLink
} from './WelcomePrequelElements';
import {IMAGES} from '../../assets'
import Navbar from '../../components/Navbar';
import ModalMaintenance from '../../components/ModalMaintenance';
import ModalErrorWallet from '../../components/ModalErrorWallet';
import Loading from '../../components/Loading';

const WelcomePrequel = () => {

  // just a randomizer
  const crypto = require("crypto");
  const randomID = crypto.randomBytes(36).toString('hex');

  const showModalMaintenance = false;
  const showModalErrorWallet = false;
  const [showLoading, setShowLoading ] = useState(false);
  const openLoading = () => {setShowLoading(true)};
  const closeLoading = () => {setShowLoading(false); localStorage.setItem('void-wlcm-loading', randomID)};

  useEffect(() => {
    if (!localStorage.getItem('void-wlcm-loading')) {
      openLoading();
    }
  }, [])

  return (
    <>
    {/* MODALS */}
    { showModalMaintenance === true ? <ModalMaintenance showModalMaintenance={showModalMaintenance}/> :
    <ModalErrorWallet showModalErrorWallet={showModalErrorWallet}/>}

    <Loading showLoading={showLoading} closeLoading = {closeLoading}/>
    
    {/*MAIN SECTION*/}
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