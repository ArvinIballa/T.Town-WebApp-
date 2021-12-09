import React from 'react';
import { 
  Modal, ModalSection, ModalWrapper, ModalTop, ModalTitle,
  ModalBottom, ModalSubtitleDiv, ModalSubtitle, ModalSubtitle2, 
  ModalButtonDiv, ModalButton
} from './HowToPlayElements';

const HowToPlay = ({showHowToPlayModal, closeHowToPlayModal}) => {

  const damageTiers = [
    {id: 1, tier: "____ to ___, _ $SQUAWK" },
    {id: 2, tier: "____ to ___, _ $SQUAWK" },
    {id: 3, tier: "____ to ___, _ $SQUAWK" },
    {id: 4, tier: "____ to ___, _ $SQUAWK" },
    {id: 5, tier: "____ to ___, _ $SQUAWK" },
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
                <ModalSubtitle>The product of the 3 dice rolled is equivalent to the damage dealt to the kraken.</ModalSubtitle>
                <ModalSubtitle>Damage Tiers and Prices:</ModalSubtitle>
                
                { damageTiers.map(data => 
                  <ModalSubtitle2 key={data.id}>{data.tier}</ModalSubtitle2>
                )}

              </ModalSubtitleDiv>
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