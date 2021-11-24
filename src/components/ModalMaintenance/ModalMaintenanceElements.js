import styled from 'styled-components'
import {BiError} from 'react-icons/bi'

export const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  z-index: 100;
`;

export const ModalSection = styled.div`
  width: 480px;
  height: 360px;
  background-color: rgba(172, 120, 27, 0.9);
  border-radius: 15px;
  border: 2px solid #000;
  
  @media screen and (max-width: 560px) {
    height: 300px;
    width: 320px;
    min-width: 320px;
  }
`;

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalIcon = styled(BiError)`
  height: 32px;
  width: 32px;
  color: yellow;
  object-fit: contain;
  margin-left: 7.5px;
  margin-bottom: 3px;

  @media screen and (max-width: 560px) {
    height: 26px;
    width: 26px;
    min-height: 26px;
    min-width: 26px;
  }
`;

export const ModalTop = styled.div`
  flex: 0.25;
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #000;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  text-align: center;
  cursor: default;
  
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;

export const ModalBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  padding: 0 30px;
`;

export const ModalSubtitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalSubtitle = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  cursor: default;
  margin: 5px 0;

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

export const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-size: 14px;
  width: 150px;
  padding: 10px 0;
  margin: 0 5px;
  color: #000;
  font-weight: bold;
  background-color: gold;
  border: 2px solid lightgray;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  :hover {
    background-color: yellow;
  }

  @media screen and (max-width: 560px) {
    font-size: 12px;
    width: 100px;
  }
`;