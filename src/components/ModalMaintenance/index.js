import React from 'react';
import { 
  Modal, ModalSection, ModalWrapper, ModalTop, ModalTitle, ModalIcon, 
  ModalBottom, ModalSubtitleDiv, ModalSubtitle, ModalButtonDiv, ModalButton
} from './ModalMaintenanceElements';

const ModalMaintenance = ({showModalMaintenance}) => {

  return (
    <>
    { showModalMaintenance ? 
      <Modal>
        <ModalSection>
          <ModalWrapper>
            <ModalTop>
              <ModalTitle>Server Maintenance</ModalTitle>
              <ModalIcon/>
            </ModalTop>
            <ModalBottom>
              <ModalSubtitleDiv>
                <ModalSubtitle>We sincerely apologize for this inconvenience.</ModalSubtitle>
                <ModalSubtitle>We will be back shortly after the maintenance. Thank you for your patience.</ModalSubtitle>
              </ModalSubtitleDiv>
              <ModalButtonDiv>
                <ModalButton onClick={() => window.location.reload()}>Reload</ModalButton>
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

export default ModalMaintenance;