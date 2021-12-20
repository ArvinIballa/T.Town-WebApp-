import styled from 'styled-components'
import {IMAGES} from '../../assets'

export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.prequel_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 1660px;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;

export const MainWrapper = styled.div`
  height: 700px;
  width: 1400px;
  margin: 20px 0;
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const IconDiv = styled.div`
  border: none;
  margin-right: 8px;
  z-index: 20;
  position: relative;

  @media screen and (max-height: 560px) {
    z-index: 2;
  }
`;

// ICON POSITIONS ========================================================================
export const Icon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  filter: ${({color}) => color ? 'grayscale(100%)': null};

  :hover {
    transform: scale(1.2);
  }
`;
// Tarot of the Pirates ------------------------------------------
export const TarotofthePiratesDiv = styled.div`
  height: 175px;
  width: 175px;
  position: absolute;
  bottom: -65px;
  left: 500px;
  transition: all 0.2s ease-in-out;
`;
// Mystical Lake --------------------------------------------
export const MysticalLakeDiv = styled.div`
  height: 175px;
  width: 175px;
  position: absolute;
  bottom: -50px;
  right: 320px;
  transition: all 0.2s ease-in-out;
`;

// Galleon Race --------------------------------------------
export const GalleonDiv = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  right: 55px;
  bottom: -65px;
  transition: all 0.2s ease-in-out;
`;

// Magic Pirate Potion --------------------------------------
export const MagicPiratePotionDiv = styled.div`
  height: 175px;
  width: 175px;
  position: absolute;
  left: 15px;
  bottom: -65px;
  transition: all 0.2s ease-in-out;
`;

// Pearl Diver  ---------------------------------------------
export const PearlDiverDiv = styled.div`
  height: 175px;
  width: 175px;
  position: absolute;
  bottom: -65px;
  left: 280px;
  transition: all 0.2s ease-in-out;
`;

// Kraken  -------------------------------------------------
export const KrakenDiv = styled.div`
  height: 175px;
  width: 175px;
  position: absolute;
  top: 150px;
  right: 95px;
  transition: all 0.2s ease-in-out;
`;

// Jewel Finder  --------------------------------------------
export const JewelFinderDiv = styled.div`
  height: 175px;
  width: 175px;
  position: absolute;
  top: 150px;
  left: 75px;
  transition: all 0.2s ease-in-out;
`;