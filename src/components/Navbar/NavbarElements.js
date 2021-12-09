import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import {IoIosAddCircle} from 'react-icons/io'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {HiOutlineCheckCircle} from 'react-icons/hi'

export const Nav = styled.nav`
  background: rgba(0,0,0,0.6);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  min-width: 480px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom: 2px solid gray;
  
  @media screen and (max-width: 1060px) {
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

export const HomeDiv = styled.div`
  flex: 1;
  display: flex;
`;

export const Home = styled(LinkR)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
`;

export const TitleIcon = styled.img`
  height: 55px;
  width: 55px;
  object-fit: contain;
  min-height: 30px;
  min-width: 30px;

  @media screen and (max-width: 960px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (max-width: 560px) {
    height: 30px;
    width: 30px;
  }
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 18px;
  margin-left: 5px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

// RIGHT SIDE OF NAVBAR =========================================================================================
export const RightMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AddressDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddressDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.25);
  padding: 10px 25px;
  border-radius: 20px;
  border: 1px solid lightgray;
  cursor: pointer;
`;

export const AddressCircle = styled.div`
  border-radius: 20px;
  border: 7px solid ${({color}) => color? 'red': '#01bf71'};
  margin-right: 8px;

  @media screen and (max-width: 560px) {
    border: 6px solid ${({color}) => color? 'red': '#01bf71'};
  }
`;

export const AddressText = styled.p`
  font-size: 12px;
  color: orange;
  font-weight: bold;

  @media screen and (max-width: 560px) {
    font-size: 10px;
  }
`;

export const AddressHide = styled.div`
  border-radius: 20px;
  width: 65px;
  height: 12px;
  background-color: gray;
  opacity: 0.5;

  @media screen and (max-width: 560px) {
    height: 10px;
  }
`;

// TOKEN ===========================================
export const TokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 4%;
`;

export const TokensDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.25);
  padding: 5px 0;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
`;

export const TokensText = styled.p`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin: 0 5px;

  @media screen and (max-width: 560px) {
    font-size: 11px;
  }
`;

export const TokensIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  min-height: 20px;
  min-width: 20px;
  margin-right: 5px;

  @media screen and (max-width: 560px) {
    height: 18px;
    width: 18px;
  }
`;

export const TokensAddIcon = styled(IoIosAddCircle)`
  height: 20px;
  width: 20px;
  object-fit: contain;
  color: orange;
  cursor: pointer;
  min-height: 17.5px;
  min-width: 17.5px;
  margin-left: 5px;

  @media screen and (max-width: 560px) {
    height: 17.5px;
    width: 17.5px;
  }
`;

// TOOLTIP =======================================================
export const TipIconDiv = styled.span`
  display: flex;
  margin-left: 2px;
  z-index: 10;
`;

export const TipIcon = styled(AiOutlineQuestionCircle)`
  height: 18px;
  width: 18px;
  min-width: 18px;
  color: #fff;
  object-fit: contain;
  @media screen and (max-width: 560px) {
    height: 15px;
    width: 15px;
    min-width: 15px;
  }
`;

export const TopTipDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Tip = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 15px;
  margin-left: 15px;
  width: 150px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: 7.5px;
  font-size: 14px;
  text-align: center;
  @media screen and (max-width: 560px) {
    width: 130px;
    font-size: 12px;
  }
`;

// Drop Menu ======================================================
export const DropMenu = styled.ul`
  background-color: rgba(0,0,0,0.8);
  width: 125px;
  position: absolute;
  top: 54px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow-y: auto;

  @media screen and (max-width: 560px) {
    width: 110px;
  }
`;

export const DropItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 7.5px;
  cursor: ${({color}) => color? 'default': 'pointer'};
  color: ${({color}) => color? '#01bf71': '#fff'};

  &:hover {
    color: ${({color}) => color? '#01bf71': 'orange'};
  }
`;

export const DropCheckIcon = styled(HiOutlineCheckCircle)`
  height: 14px;
  width: 14px;
  color: #01bf71;
  margin-left: 3px;
  object-fit: contain;

  @media screen and (max-width: 560px) {
    height: 11px;
    width: 11px;
  }
`;

export const DropText = styled.p`
  font-size: 12px;
  font-weight: bold;

  @media screen and (max-width: 560px) {
    font-size: 10px;
  }
`;
