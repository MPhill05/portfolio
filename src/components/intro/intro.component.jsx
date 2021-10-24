import React, { useState } from 'react';
import {
  IntroContainer,
  IntroBackground,
  VideoBackground,
  IntroContent,
  IntroH1,
  IntroP,
  IntroBtnWrapper,
  ArrowForward,
  ArrowRight,
  NavButton
} from './intro.styles';
import Video from '../../videos/portfolioVideo.mp4';
// import { Button } from '../button.styles';
// import { FaArrowDown } from 'react-icons/fa';

const IntroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(hover)
  }

  return (
    <IntroContainer>
      <IntroBackground>
        <VideoBackground autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </IntroBackground>
      <IntroContent>
        <IntroH1>Mark Phillips</IntroH1>
        <IntroP>
          Software Developer
        </IntroP>
        {/* <IntroBtnWrapper>
          <NavButton
            to='/resume'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >Resume {hover ? <ArrowForward /> : <ArrowRight />}
          </NavButton>
        </IntroBtnWrapper> */}
        {/* <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >See More { <FaArrowDown />}
          </Button> */}
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroSection;