import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 100;
`;

export const ModalSection = styled.div`
  width: 225px;
  padding: 0 20px;
  min-width: 200px;

  @media screen and (max-width: 560px) {
    width: 200px;
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

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  background-color: transparent;
  border-radius: 7.5px;
  border: 2px solid #fff;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const LoadingFiller = styled.div`
  height: 100%;
  background-color: orange;
  transition: width 1s ease-in-out;
  border-radius: 5px;
  text-align: right;
`;

export const LoadingLabelDiv = styled.div`
  height: 100%;
  text-align: right;
`;

export const LoadingLabel = styled.span`
  color: white;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const LoadingIcon = styled.img`
  height: 300px;
  width: 300px;
  object-fit: contain;
  min-height: 250px;
  min-width: 250px;

  @media screen and (max-width: 560px) {
    height: 250px;
    width: 250px;
  }
`;

export const LoadingTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  text-align: center;
  
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;