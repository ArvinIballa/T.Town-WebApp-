import React, {useState, useEffect} from 'react';
import { ContainerBG, Container, MainWrapper, MapWrapper, IconDiv, Icon,
  TarotofthePiratesDiv, MysticalLakeDiv, GalleonDiv, PearlDiverDiv,
  KrakenDiv, JewelFinderDiv, MagicPiratePotionDiv
} from './WelcomePrequelElements';
import {IMAGES} from '../../assets'
import Navbar from '../../components/Navbar';
import ModalMaintenance from '../../components/ModalMaintenance';
import ModalErrorWallet from '../../components/ModalErrorWallet';
import Loading from '../../components/Loading';
import Tooltip from './Tooltip';

const WelcomePrequel = () => {
  // just a randomizer
  const crypto = require("crypto");
  const randomID = crypto.randomBytes(36).toString('hex');

  // Modal functions -----------
  const showModalMaintenance = false;
  const showModalErrorWallet = false;
  const [showLoading, setShowLoading ] = useState(false);
  const openLoading = () => {setShowLoading(true)};
  const closeLoading = () => {setShowLoading(false); localStorage.setItem('void-wlcm-loading', randomID)};

  // Game Data -----------------
  const gameData = [
    {id: 0, lock: true, icon: IMAGES.pearl_icon, title: "Pearl Diver", category: "Coming Soon", description: "lore magna aliqu quis nostrud exercitation ul", path: 'pearl-diver'},
    {id: 1, lock: true, icon: IMAGES.lake_icon, title: "Mystical Lake", category: "Coming Soon", description: "lore magna aliqu quis nostrud exercitation ul", path: 'mystical-lake'},
    {id: 2, lock: true, icon: IMAGES.potion_icon, title: "Magic Pirate Potion", category: "Coming Soon", description: "lore magna aliqu quis nostrud exercitation ul", path: 'pirate-potion'},
    {id: 3, lock: false, icon: IMAGES.galleon_icon, title: "Galleon Race", category: "Racing", description: "lore magna aliqu quis nostrud exercitation ul", path: 'galleon-race'},
    {id: 4, lock: true, icon: IMAGES.jewel_icon, title: "Jewel Finder", category: "Coming Soon", description: "lore magna aliqu quis nostru quis nostrudliqu quis nostrud exercitation ul lore magna aliqu quis nostrud exercitation ullore magna aliqu quis nostrud exercitation ul", path: 'jewel-finder'},
    {id: 5, lock: false, icon: IMAGES.kraken_icon, title: "Kraken Slayer", category: "Combat Battle", description: "lore lore magna aliqu quis nostrud ", path: 'kraken-slayer'},
    {id: 6, lock: true, icon: IMAGES.tarot_icon, title: "Tarot of the Pirates", category: "Coming Soon", description: "lore magna aliqu quis nostrud exercitation ul", path: 'tarot-pirates'},
  ]

  // Tooltip functions ---------
  const [tooltip, setTooltip] = useState(null);
  const openTooltip = (tooltip_num) => {setTooltip(tooltip_num)};
  const closeTooltip = () => {setTooltip(null)};

  // ---------------------------
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
    <Navbar/>

    {/*MAIN SECTION*/}
    <ContainerBG>
      <Container>
        <MainWrapper>
          <MapWrapper>

            <IconDiv>
              <PearlDiverDiv onMouseEnter={() => openTooltip(0)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 0 ? true : false} gameIcon={gameData[0].icon} gameTitle={gameData[0].title} 
                  gameCategory={gameData[0].category} gameDescription={gameData[0].description} gameLock={gameData[0].lock === true ? 1 : 0}
                  gamePath={gameData[0].path}
                />
                <Icon color={gameData[0].lock === true ? 1 : 0} src={gameData[0].icon} alt="Pearl-Diver"/>
              </PearlDiverDiv>
            </IconDiv>

            <IconDiv>
              <MysticalLakeDiv onMouseEnter={() => openTooltip(1)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 1 ? true : false} gameIcon={gameData[1].icon} gameTitle={gameData[1].title} 
                  gameCategory={gameData[1].category} gameDescription={gameData[1].description} gameLock={gameData[1].lock === true ? 1 : 0}
                  gamePath={gameData[1].path}
                />
                <Icon color={gameData[1].lock === true ? 1 : 0} src={gameData[1].icon} alt="Mystical-Lake"/>
              </MysticalLakeDiv>
            </IconDiv>

            <IconDiv>
              <MagicPiratePotionDiv onMouseEnter={() => openTooltip(2)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 2 ? true : false} gameIcon={gameData[2].icon} gameTitle={gameData[2].title} 
                  gameCategory={gameData[2].category} gameDescription={gameData[2].description} gameLock={gameData[2].lock === true ? 1 : 0}
                  gamePath={gameData[2].path}
                />
                <Icon color={gameData[2].lock === true ? 1 : 0} src={gameData[2].icon} alt="Magic-Pirate-Potion"/>
              </MagicPiratePotionDiv>
            </IconDiv>

            <IconDiv>
              <GalleonDiv onMouseEnter={() => openTooltip(3)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 3 ? true : false} gameIcon={gameData[3].icon} gameTitle={gameData[3].title} 
                  gameCategory={gameData[3].category} gameDescription={gameData[3].description} gameLock={gameData[3].lock === true ? 1 : 0}
                  gamePath={gameData[3].path}
                />
                <Icon color={gameData[3].lock === true ? 1 : 0} src={gameData[3].icon} alt="Galleon-Race"/>
              </GalleonDiv>
            </IconDiv>
            

            <IconDiv>
              <JewelFinderDiv onMouseEnter={() => openTooltip(4)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 4 ? true : false} gameIcon={gameData[4].icon} gameTitle={gameData[4].title} 
                  gameCategory={gameData[4].category} gameDescription={gameData[4].description} gameLock={gameData[4].lock === true ? 1 : 0}
                  gamePath={gameData[4].path}
                />
                <Icon color={gameData[4].lock === true ? 1 : 0} src={gameData[4].icon} alt="Jewel-Finder"/>
              </JewelFinderDiv>
            </IconDiv>

            <IconDiv>
              <KrakenDiv onMouseEnter={() => openTooltip(5)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 5 ? true : false} gameIcon={gameData[5].icon} gameTitle={gameData[5].title} 
                  gameCategory={gameData[5].category} gameDescription={gameData[5].description} gameLock={gameData[5].lock === true ? 1 : 0}
                  gamePath={gameData[5].path}
                />
                <Icon color={gameData[5].lock === true ? 1 : 0} src={gameData[5].icon} alt="Kraken-Slayer"/>
              </KrakenDiv>
            </IconDiv>

            <IconDiv>
              <TarotofthePiratesDiv onMouseEnter={() => openTooltip(6)} onMouseLeave={closeTooltip}>
                <Tooltip 
                  showTooltip={tooltip === 6 ? true : false} gameIcon={gameData[6].icon} gameTitle={gameData[6].title} 
                  gameCategory={gameData[6].category} gameDescription={gameData[6].description} gameLock={gameData[6].lock === true ? 1 : 0}
                  gamePath={gameData[6].path}
                />
                <Icon color={gameData[6].lock === true ? 1 : 0} src={gameData[6].icon} alt="Tarot-Pirates"/>
              </TarotofthePiratesDiv>
            </IconDiv>

          </MapWrapper>
        </MainWrapper>
      </Container>
    </ContainerBG>
    </>
  );
}

export default WelcomePrequel;