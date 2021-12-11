import styled from 'styled-components'

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
  height: 500px;
  background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
  border-radius: 15px;
  border: 2px solid #fff;
  
  @media screen and (max-width: 560px) {
    height: 400px;
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

export const ModalTop = styled.div`
  flex: 0.2;
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #fff;
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
  margin: 10px 0;

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

export const ModalSubtitle2 = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  cursor: default;
  margin: 2px 0;

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
  color: #fff;
  font-weight: bold;
  background-color: #464A50;
  border: 2px solid lightgray;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  :hover {
    background-color: #CABCBB;
    color: #000;
  }

  @media screen and (max-width: 560px) {
    font-size: 12px;
    width: 100px;
  }
`;