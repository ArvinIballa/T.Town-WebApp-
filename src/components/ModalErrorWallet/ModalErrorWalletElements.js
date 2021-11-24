import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 100;
`;

export const ModalSection = styled.div`
  width: 450px;
  height: 300px;
  background-color: #273138;
  border-radius: 15px;
  border: 2px solid #000;
  padding: 20px;
  
  @media screen and (max-width: 560px) {
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
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #1c262d;
  }
`;

export const ModalIcon = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-bottom: 10px;

  @media screen and (max-width: 560px) {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  text-align: center;
  
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;

export const ModalSubtitle = styled.p`
  font-size: 18px;
  color: darkgray;
  text-align: center;
  margin: 15px 0;

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;