import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;

export const MainWrapper = styled.div`
  height: 750px;
  width: 1350px;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 15px #dcdcdc;
  flex-flow: wrap;
  padding: 20px 10px;
`;

export const Card = styled(LinkR)`
  width: 22%;
  height: 400px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid lightgray;
  box-shadow: 4px 4px 4px lightgray;
  margin: 20px;
  padding: 15px;
  transition: 0.3s;
  display: flex;
  cursor: ${({effect}) => effect ? 'default': 'pointer'};
  text-decoration: none;
  color: ${({effect}) => effect ? 'gray': '#000'};

  :hover {
    box-shadow: ${({effect}) => effect ? '4px 4px 4px lightgray': '7.5px 7.5px 7.5px lightgray'};
  }

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const CardSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardText = styled.p`
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;
