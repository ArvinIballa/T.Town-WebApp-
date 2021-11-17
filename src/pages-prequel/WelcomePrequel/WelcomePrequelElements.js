import styled from 'styled-components'
import {IMAGES} from '../../assets'
import { Link as LinkR } from 'react-router-dom';

export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.prequel_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 280px;
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
  width: 900px;
  margin: 20px 0;
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const IconLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  z-index: 2;
`;

// ASSETS ===============================================================
export const GalleonIcon = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  margin-right: 550px;
  margin-bottom: 60px;
  z-index: 2;

  @media screen and (max-width: 960px) {
    height: 110px;
    width: 110px;
    margin-right: 350px;
    margin-bottom: 85px;
  }

  @media screen and (max-width: 560px) {
    height: 75px;
    width: 75px;
    margin-right: 250px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 360px) {
    height: 50px;
    width: 50px;
    margin-right: 175px;
    margin-bottom: 105px;
  }
  
  :hover {
    transition: all 0.2s ease-in-out;
    height: 175px;
    @media screen and (max-width: 960px) {
      height: 140px;
    }
    @media screen and (max-width: 560px) {
      height: 90px;
    }
    @media screen and (max-width: 360px) {
      height: 60px;
    }
  }
`;

export const KrakenIcon = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  margin-left: 520px;
  margin-bottom: 430px;
  z-index: 2;
  
  @media screen and (max-width: 960px) {
    height: 110px;
    width: 110px;
    margin-left: 335px;
    margin-bottom: 325px;
  }

  @media screen and (max-width: 560px) {
    height: 75px;
    width: 75px;
    margin-left: 230px;
    margin-bottom: 265px;
  }

  @media screen and (max-width: 360px) {
    height: 50px;
    width: 50px;
    margin-left: 165px;
    margin-bottom: 225px;
  }

  :hover {
    transition: all 0.2s ease-in-out;
    height: 175px;
    @media screen and (max-width: 960px) {
      height: 140px;
    }
    @media screen and (max-width: 560px) {
      height: 90px;
    }
    @media screen and (max-width: 360px) {
      height: 60px;
    }
  }
`;

export const Map = styled.img`
  height: 650px;
  width: 800px;
  object-fit: contain;
  position: absolute;
  margin-top: -125px;

  @media screen and (max-width: 960px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    height: 400px;
    width: 350px;
  }

  @media screen and (max-width: 360px) {
    height: 250px;
    width: 250px;
  }
`;