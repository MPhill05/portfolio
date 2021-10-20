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
  ProblemSolve,
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
    document.body.style.overflow = 'hidden';
    return reactDom.createPortal(
      <Background onClick={close}>
        <animated.div style={animation}>
          <ModalWrapper>
            <ModalImg
              src={props.modalImg}
              alt={props.alt}
            />
            <ModalContent>
              <h1>{props.projectName}</h1>
              <p>{props.projectType}</p>
              <ImgColumn>
                <TechIcon>
                  {props.techStack}
                </TechIcon>
              </ImgColumn>
              <ProblemSolve>
                <p>{props.challenge}</p>
                <p>{props.solution}</p>
                <p>{props.outcome}</p>
              </ProblemSolve>
              <ModalButtons>
                <ModalLink href={props.viewCode} target='_blank' rel='noreferrer'>
                  <button className='modalBtn'><FaRegEye /> CODE</button>
                </ModalLink>
                <ModalLink href={props.viewSite} target='_blank' rel='noreferrer'>
                  <button className='modalBtn rightBtn'><FaCode /> SITE</button>
                </ModalLink>
              </ModalButtons>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={close} />
          </ModalWrapper>
        </animated.div>
      </Background>
      , document.getElementById('modal-root'))
  } else {
    document.body.style.overflow = 'unset';
    return null
  }
})

export default Modal;