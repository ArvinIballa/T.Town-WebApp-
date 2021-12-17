import styled from 'styled-components'
import {IMAGES} from '../../../assets'

export const MainContainer = styled.div`
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