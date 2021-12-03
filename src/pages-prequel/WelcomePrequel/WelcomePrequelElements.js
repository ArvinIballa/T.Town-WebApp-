import styled from 'styled-components'
import {IMAGES} from '../../assets'
import { Link as LinkR } from 'react-router-dom';

export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.prequel_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 480px;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display:flex;
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

export const IconLink = styled(LinkR)`
  text-decoration: none;
  border: none;
  text-align: center;
  margin-right: 8px;
  z-index: 2;
  position: relative;

`;

// ICON POSITIONS ========================================================================
export const TarotofthePiratesIcon = styled.img`
  height: 175px;
  width: 175px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  bottom: -50px;
  left: 530px;
  
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%);

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    right: 240px;
  }
  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

export const MysticalLakeIcon = styled.img`
  height: 175px;
  width: 175px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  bottom: -15px;
  right: 320px;
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%);

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    right: 220px;
  }
  @media screen and (max-width: 768px) {
    right: 10px;
    bottom: -5px;
  }
`;

export const GalleonIcon = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  right: 55px;
  bottom: -35px;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    bottom: -25px;
  }
  @media screen and (max-width: 768px) {
    top: 35px;
    right: 15px;
  }
`;

export const MagicPiratePotionIcon = styled.img`
  height: 175px;
  width: 175px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  left: 15px;
  bottom: -50px;
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%);

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    bottom: -25px;
  }
  @media screen and (max-width: 768px) {
    bottom: -100px;
  }
`;

export const PearlDiverIcon = styled.img`
  height: 175px;
  width: 175px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  bottom: -50px;
  left: 280px;
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%);

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    bottom: -25px;
    left: 225px;
  }
  @media screen and (max-width: 768px) {
    bottom: 70px;
    left: 15px;
  }
`;

export const KrakenIcon = styled.img`
  height: 175px;
  width: 175px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 150px;
  right: 95px;
  transition: all 0.2s ease-in-out;

  :hover{
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    right: 100px;
    top: 100px;
  }
  @media screen and (max-width: 768px) {
    top: 200px;
    right: 40px;
  }
`;

export const JewelFinderIcon = styled.img`
  height: 175px;
  width: 175px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 150px;
  left: 75px;
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%);

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1060px) {
    height: 125px;
    width: 125px;
    top: 110px;
    left: 50px;
  }
  @media screen and (max-width: 768px) {
    left: 0;
    top: 150px;
  }
`;