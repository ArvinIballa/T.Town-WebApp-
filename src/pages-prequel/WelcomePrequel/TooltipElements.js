import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  top: -260px;
  right: -135px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 380px;
  height: 260px;
  visibility: ${({show}) => show ? 'visible': 'hidden'};
  transform: ${({show}) => show ? 'translateX(-10%) translateY(0px) translateY(-15px)': null};
  opacity: ${({show}) => show ? '1': '0'};
  transition: 0.3s;
  z-index: 20;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

// Top --------------------------------------------
export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 85px;
  height: 85px;
  object-fit: contain;
`;

export const IconLock = styled.img`
  width: 85px;
  height: 85px;
  object-fit: contain;
  filter: grayscale(100%);
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const Category = styled.p`
  font-size: 15px;
  color: #969696;
`;

// Mid --------------------------------------------
export const MidSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-top: 15px;
  margin-bottom: 18px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 5px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 5px;
  }
`;

export const Description = styled.p`
  display: flex;
  align-items: flex-start;
  height: 100%;
  font-size: 17px;
  color: #272727;
`;

// Bottom -----------------------------------------
export const BottomSection = styled.div`
  display: flex;
`;

export const PlayButton = styled(Link)`
  border-radius: 15px;
  width: 100%;
  background: #6c75f5;
  padding: 10px 0;
  white-space: nowrap;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #572cf1;
    color: #FFF;
  }
`;

export const PlayButtonLock = styled.button`
  border-radius: 15px;
  width: 100%;
  background: #969696;
  padding: 10px 0;
  white-space: nowrap;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: default;
  text-decoration: none;
  text-align: center;
`;