import React from 'react';
import { 
  Modal, ModalSection, ModalWrapper, ModalTop, ModalTitle,
  ModalBottom, ModalSubtitleDiv, ModalSubtitle, ModalSubtitle2, 
  ModalButtonDiv, ModalButton
} from './HowToPlayElements';

const HowToPlay = ({showHowToPlayModal, closeHowToPlayModal}) => {

  const damageTiers = [
    {id: 1, tier: "Koi:     __ to ___, _ $SQUAWK" },
    {id: 2, tier: "Angel Fish:  __ to ___, _ $SQUAWK" },
    {id: 3, tier: "Gold Fish: __ to ___, _ $SQUAWK" },
    {id: 4, tier: "Parrot Fish: __ to ___, _ $SQUAWK" },
    {id: 5, tier: "Fish Bone: __ to ___, _ $SQUAWK" },
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
                <ModalSubtitle>Win depending on what fish has been caught.</ModalSubtitle>
                <ModalSubtitle>Black Pearls and Prizes:</ModalSubtitle>
                
                { damageTiers.map(data => 
                  <ModalSubtitle2 key={data.id}>{data.tier}</ModalSubtitle2>
                )}

              </ModalSubtitleDiv>
              <ModalSubtitle style={{color:'red'}}>*Note that the probability of winning prizes will be tiered depending on level of Fishing Rod</ModalSubtitle>
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