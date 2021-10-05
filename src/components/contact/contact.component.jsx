import React, { useState } from 'react';
import {
  ContactContainer,
  ContactHeader,
  ContactInfo,
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledTextArea
} from './contact.styles';

const inititalState = {
  name: '',
  email: '',
  message: '',
}

const ContactSection = () => {
  const [state, setState] = useState(inititalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide your ${key}`)
        return
      }
    }
    console.log('Succeeded!')
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }))
  }

  return (
    <ContactContainer id='contact'>
      <ContactHeader>Say hello!</ContactHeader>
      <ContactInfo>
        <br />
        Got an idea for a project?
        <br />
        <br />
        Potential opportunity?
        <br />
        <br />
        Lets chat!
      </ContactInfo>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <label htmlFor='name'>Name</label>
          <StyledInput
            type='text'
            name='name'
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor='email'>Email</label>
          <StyledInput
            type='email'
            name='email'
            value={state.email}
            onChange={handleInput}
          />
          <br />
          <label htmlFor='message'>Message</label>
          <StyledTextArea name='message' />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type='submit'>Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </ContactContainer>
  )
}

export default ContactSection;