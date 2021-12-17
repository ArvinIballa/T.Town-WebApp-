import React from 'react';
import { 
  Modal, ModalSection, ModalWrapper, ModalTop, ModalTitle,
  ModalBottom, ModalSubtitleDiv, ModalSubtitle, ModalSubtitle2, 
  ModalButtonDiv, ModalButton
} from './HowToPlayElements';

const HowToPlay = ({showHowToPlayModal, closeHowToPlayModal}) => {

  const damageTiers = [
    {id: 1, tier: "_ jewels: __ $SQUAWK" },
    {id: 2, tier: "_ jewels: __ $SQUAWK" },
    {id: 3, tier: "_ jewels: __ $SQUAWK" },
    {id: 4, tier: "_ jewels: __ $SQUAWK" },
    {id: 5, tier: "_ jewels: __ $SQUAWK" },
  ]

  return (
    <>
    { showHowToPlayModal ? 
      <Modal>
        <ModalSection>
          <ModalWrapper>
            <ModalTop>
              <ModalTitle>How to Play?</ModalTitle>
            </ModalTop>
            <ModalBottom>
              <ModalSubtitleDiv>
                <ModalSubtitle>Win depending on how many jewels are unlocked.</ModalSubtitle>
                <ModalSubtitle>Jewels and Prizes:</ModalSubtitle>
                
                { damageTiers.map(data => 
                  <ModalSubtitle2 key={data.id}>{data.tier}</ModalSubtitle2>
                )}

              </ModalSubtitleDiv>
              <ModalSubtitle style={{color:'red'}}>*Note that the probability of winning prizes will be tiered depending on level of Hammer.</ModalSubtitle>
              <ModalButtonDiv>
                <ModalButton onClick={closeHowToPlayModal}>Understood</ModalButton>
              </ModalButtonDiv>
            </ModalBottom>
          </ModalWrapper>
        </ModalSection>
      </Modal>
      : null
    }
    </>
  );
}

export default HowToPlay;