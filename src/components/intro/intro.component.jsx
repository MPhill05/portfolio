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
  ArrowRight
} from './intro.styles';
import Video from '../../videos/video.mp4';
import { Button } from '../button.styles';

const IntroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(hover)
  }

  return (
    <IntroContainer>
      <IntroBackground>
        <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
      </IntroBackground>
      <IntroContent>
        <IntroH1>Mark Phillips</IntroH1>
        <IntroP>
          Software Developer
        </IntroP>
        <IntroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >See More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button
            to='/resume'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >Resume {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </IntroContainer>
  )
}

export default IntroSection;