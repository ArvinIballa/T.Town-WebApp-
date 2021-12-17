import styled from 'styled-components'
import {IMAGES} from '../../../assets'
import { Link as LinkR } from 'react-router-dom';

export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.mystical_lake_bg}) no-repeat center center;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
`;

// LEFT SECTION =================================================================
export const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const GameImage = styled.img`  
  height: 80%;
  width: 80%;
  object-fit: contain;
  min-height: 320px;
  min-width: 320px;
`;

// RIGHT SECTION ================================================================
export const ContainerRight = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 5%;
`;

export const GameTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
`;

export const GameTitle = styled.h1`
  color: ${({color}) => color? '#d42812': '#07b028'};
  font-size: 120px;
  transition: all 0.2s ease-in-out;
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 85px;
  }
`;

export const GameDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 35px;
`;

export const GameDescription = styled.p`
  color: ${({design}) => design? '#d42812': '#07b028'};
  font-size: ${({design}) => design? '18px': '20px'};
  font-weight: ${({design}) => design? 'bold': 'normal'};
  margin-top: ${({design}) => design? '20px': '0'};
  transition: all 0.2s ease-in-out;
  text-align: right;
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

export const GameCostDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameCostWrapper = styled.div`
  background: rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 48px;
  border: 1px solid #d42812;
  border-radius: 10px;
`;

export const GameCost = styled.p`
  color: #fff;
  font-size: 24px;
  transition: all 0.2s ease-in-out;
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;

export const GameRewardWrapper = styled.div`
   margin: 10px 0px 0px 0px;
`

export const GameReward = styled.p`
  color: #d42812;
  font-size : 19px;
  transition: all 0.2 ease-in-out;
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;




export const GameButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 35px;
`;

export const GameButton1 = styled(LinkR)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: #d42812;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  margin-right: 7.5px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  width: 160px;
  :hover {
    background-color: #bd1601;
  }

  @media screen and (max-width: 560px) {
    font-size: 14px;
    width: 140px;
  }
`;

export const GameButton2 = styled.button`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: #d42812;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  margin-left: 7.5px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  width: 160px;

  :hover {
    background-color: #bd1601;
  }

  @media screen and (max-width: 560px) {
    font-size: 14px;
    width: 140px;
  }
`;