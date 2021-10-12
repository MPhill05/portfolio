import React, { forwardRef, useImperativeHandle } from 'react';
import reactDom from 'react-dom';
import { useSpring, animated } from 'react-spring';
import {
  FaRegEye,
  FaCode
} from 'react-icons/fa';
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  ModalButtons,
  ModalLink,
  CloseModalButton,
  ImgColumn,
  TechIcon
} from './modal.styles';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(true);
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: setDisplay ? 1 : 0,
    transform: setDisplay ? `translateY(0%)` : `translateY(-100%)`
  });

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close()
    }
  })

  const open = () => {
    setDisplay(true)
  }

  const close = () => {
    setDisplay(false)
  }

  if (display) {
    return reactDom.createPortal(
      <Background onClick={close}>
        <animated.div style={animation}>
          <ModalWrapper>
            <ModalImg src={props.ModalImg}
              alt={props.alt} />
            <ModalContent>
              <h1>{props.projectName}</h1>
              <p>{props.projectType}</p>
              <ImgColumn>
                <TechIcon>
                  {props.techStack}
                </TechIcon>
              </ImgColumn>
              <p>{props.challenge}</p>
              <p>{props.solution}</p>
              <p>{props.outcome}</p>
              <ModalButtons>
                <ModalLink href={props.viewCode} target='_blank' rel='noreferrer'>
                  <button className='modalBtn'><FaRegEye /> View Code</button>
                </ModalLink>
                <ModalLink href={props.viewSite} target='_blank' rel='noreferrer'>
                  <button className='modalBtn rightBtn'><FaCode /> View Site</button>
                </ModalLink>
              </ModalButtons>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={close} />
          </ModalWrapper>
        </animated.div>
      </Background>
      , document.getElementById('modal-root'))
  }

  return null
})

export default Modal;