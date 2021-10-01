import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {
  FaRegEye,
  FaCode
} from 'react-icons/fa';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const ModalWrapper = styled.div`
  width: 80vw;
  height: 60vh;
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.8);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 11;
`;

export const ModalButtons = styled.a`
  margin: auto;

  .modalBtn {
    display: inline-block;
    margin: auto;
    cursor: pointer;
  }

  .rightBtn {
    margin-left: 50px;
  }
`;

export const ModalLink = styled.a`

`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
      document.body.style.overflow = 'unset';
    }
  }

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false)
      document.body.style.overflow = 'unset';
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={``}
                alt={'test'} />
              <ModalContent>
                <h1>Demo Header</h1>
                <p>Demo Text</p>
                <ModalButtons>
                  <ModalLink href={``} target='_blank' rel='noreferrer'>
                    <button className='modalBtn'><FaRegEye /> View Code</button>
                  </ModalLink>
                  <ModalLink href={``} target='_blank' rel='noreferrer'>
                    <button className='modalBtn rightBtn'><FaCode /> View Site</button>
                  </ModalLink>
                </ModalButtons>
              </ModalContent>
              <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
};