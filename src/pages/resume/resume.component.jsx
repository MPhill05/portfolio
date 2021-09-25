import React from 'react';
import {
  Background,
  ResumeWrapper,
  ResumeImage,
  ResumeContent
} from './resume.styles.jsx';

const ResumeComponent = () => {
  return (
    <Background>
      <ResumeWrapper>
       <ResumeImage>
       </ResumeImage>
        <ResumeContent>
          <h1>Mark Phillips</h1>
          <h3>Software Developer</h3>
          <button>Join Now</button>
        </ResumeContent>
      </ResumeWrapper>
    </Background>
  )
}

export default ResumeComponent;