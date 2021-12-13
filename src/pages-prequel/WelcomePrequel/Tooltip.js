import React from 'react';
import { BottomSection, Category, Container, Description, Icon, IconLock, MidSection, 
  PlayButton, PlayButtonLock, Title, TitleDiv, TopSection, Wrapper 
} from './TooltipElements';

const Tooltip = ({showTooltip, gameIcon, gameTitle, gameCategory, gameDescription, gameLock, gamePath}) => {

  return (
    <Container show={showTooltip === true ? 1 : 0}>
      <Wrapper>
        <TopSection>
          { gameLock === 1 ?
            <IconLock src={gameIcon}/>
            :
            <Icon src={gameIcon}/>
          }
          <TitleDiv>
            <Title>{gameTitle}</Title>
            <Category>{gameCategory}</Category>
          </TitleDiv>
        </TopSection>
        <MidSection>
          <Description>{gameDescription}</Description>
        </MidSection>
        <BottomSection>
          { gameLock === 1 ?
            <PlayButtonLock>Play Now</PlayButtonLock>
            :
            <PlayButton to={gamePath}>Play Now</PlayButton>
          }
        </BottomSection>
      </Wrapper>
    </Container>
  );
}

export default Tooltip;