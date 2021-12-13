import styled from 'styled-components'
import {GIFS, IMAGES} from '../../../assets'
import { Link as LinkR } from 'react-router-dom';

export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.galleon}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 900px;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 40px;
`;

export const Paragraph = styled.div`
  width: 520px;
  margin-right: 2%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  border: 1px ;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  background: rgba(0,0,0,0.3);

  @media screen and (max-width: 560px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  color: #FFAA5A;
  cursor: default;
  font-size: 100px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 560px) {
    font-size: 50px;
  }
`;

export const SubParagraph = styled.p`
  font-size: 36px;
  cursor: default;
  margin: 20px 0;
  color: #fff;
  



  @media screen and (max-width: 560px) {
    font-size: 30px;
  }
`;


export const SubPlay = styled.p`
  font-size: 32px;
  cursor: default;
  text-align: left;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
  color: #fff;

  @media screen and (max-width: 560px) {
    font-size: 26px;
  }
`;


export const SubWin = styled.p`
  font-size: 32px;
  cursor: default;
  margin-right: 10px;
  margin-top: 15px;
  text-align: left;
  color: #fff;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 560px) {
    font-size: 26px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const PlayNow = styled(LinkR)`
  font-size: 26px;
  border-radius: 15px;
  background: #64C5BA ;
  padding: 8px 16px;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-right: 15px;
  transition: 250ms;

  @media screen and (max-width: 560px) {
    font-size: 20px;
    transition: 250ms;
  }
  :hover {
    background-color: #64D5BA;
    transform: scale(1.05);
    transition: 250ms;
  }
`;


export const HowToPlayBtn = styled.button`
  font-size: 26px;
  border-radius: 15px;
  background: #2799d5;
  padding: 8px 16px;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 15px;
  transition: 250ms;
    
  @media screen and (max-width: 560px) {
    font-size: 20px;
    transition: 250ms;
  }

  :hover {
    background-color: #068dd6;
    transform: scale(1.05);
    transition: 250ms;
  }
`;
