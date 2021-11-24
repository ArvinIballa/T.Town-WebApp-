import React from 'react';
import { 
  Modal, ModalSection, ModalWrapper, ModalTitle, ModalIcon, ModalSubtitle,
} from './ModalErrorWalletElements';
import {IMAGES} from '../../assets'

const ModalErrorWallet = ({showModalErrorWallet}) => {

  return (
    <>
    { showModalErrorWallet ? 
      <Modal>
        <ModalSection>
          <ModalWrapper>
            <ModalIcon src={IMAGES.metamask_icon} alt="MetaMask"/>
            <ModalTitle>MetaMask</ModalTitle>
            <ModalSubtitle>Connect to your MetaMask Wallet</ModalSubtitle>
          </ModalWrapper>
        </ModalSection>
      </Modal>
      : null
    }
    </>
  );
}

export default ModalErrorWallet;