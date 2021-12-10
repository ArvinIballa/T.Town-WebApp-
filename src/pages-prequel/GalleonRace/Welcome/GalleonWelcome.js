import styled from 'styled-components'
import {GIFS} from '../../../assets'
import { Link as LinkR } from 'react-router-dom';

export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${GIFS.gal_gif}) no-repeat center center;
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

  @media screen and (max-width: 560px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  color: #000;
  cursor: default;
  font-size: 64px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 560px) {
    font-size: 50px;
  }
`;

export const SubParagraph = styled.p`
  font-size: 36px;
  cursor: default;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 560px) {
    font-size: 30px;
  }
`;


export const SubPlay = styled.p`
  font-size: 32px;
  cursor: default;
  text-align: right;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 560px) {
    font-size: 26px;
  }
`;


export const SubWin = styled.p`
  font-size: 32px;
  cursor: default;
  margin-right: 10px;
  margin-top: 15px;
  text-align: right;
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
  background: #B57242;
  padding: 8px 16px;
  color: #26262D;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-right: 15px;

  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
  :hover {
    background-color: #CABCBB;
  }
`;


export const HowToPlayBtn = styled.button`
  font-size: 26px;
  border-radius: 15px;
  background: #B57242;
  padding: 8px 16px;
  color: #26262D;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 15px;
    
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }

  :hover {
    background-color: #CABCBB;
  }
`;
