import React, {useState, useEffect, useCallback} from 'react';
import { GIFS } from '../../assets';
import { addDelay } from '../global_functions';
import { 
  Modal, ModalSection, ModalWrapper, LoadingTitle,
  LoadingDiv, LoadingLabel, LoadingIcon, LoadingFiller, LoadingLabelDiv
} from './LoadingElements';

const Loading = ({showLoading, closeLoading}) => {
  
  const [loadingValue, setLoadingValue] = useState(0);

  const closer = useCallback(() => {
    // temporary closer
    if (loadingValue === 100) {
      addDelay(() => {
        closeLoading();
      }, 1000);
    }

    },[loadingValue, closeLoading],
  )

  useEffect(() => {
    closer();

    const timer = setInterval(() => {
      setLoadingValue((newLoading) => newLoading >=80 ? 100 : newLoading + (Math.floor(Math.random() * 20) + 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    }

  }, [closer]);

  return (
    <>
    { showLoading ? 
      <Modal>
        <ModalSection>
          <ModalWrapper>
            <LoadingIcon src={GIFS.loading_gif}/>
            <LoadingDiv>
              <LoadingFiller style={{width: `${loadingValue}%`}}>
                <LoadingLabelDiv>
                  <LoadingLabel>{loadingValue}%</LoadingLabel>
                </LoadingLabelDiv>
              </LoadingFiller>
            </LoadingDiv>
            <LoadingTitle>Loading...</LoadingTitle>
          </ModalWrapper>
        </ModalSection>
      </Modal>
      : null
    }
    </>
  );
}

export default Loading;