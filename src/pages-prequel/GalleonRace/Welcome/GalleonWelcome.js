import styled from 'styled-components'
import {GIFS} from '../../../assets'



export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${GIFS.gal_gif}) no-repeat center center;
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

export const Paragraph = styled.p`
  font-size: 80px;
  cursor: default;
  margin: 5px 0;
  margin-left: 60%;
  margin-bottom: 15%;
  
  

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

export const SubParagraph = styled.p`
  font-size: 40px;
  cursor: default;
  margin: 20px 0;

  

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;


export const SubPlay = styled.p`
  font-size: 40px;
  cursor: default;
  margin: 20px 0;
  margin-left: 230px;

  

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;


export const SubWin = styled.p`
  font-size: 40px;
  cursor: default;
  margin: 20px 0;
  margin-left: 130px;

  

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;


export const PlayNow = styled.b`
    font-size: 40px;
    border-radius: 15px;
    background: #B57242;
    padding: 8px 16px;
    color: #26262D;
    text-decoration: underline;
    text-decoration-color: #B57242;
    position:absolute ;
    right: 14%;
    bottom: 28%;
    

  

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;
