import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';
import {
  ContactContainer,
  ContactHeader,
  ContactInfo,
  StyledButton,
  StyledError,
  StyledForm,
  H1,
  Space,
  StyledFormWrapper,
  StyledInput,
  StyledTextArea
} from './contact.styles';
import ReCAPTCHA from 'react-google-recaptcha';

const inititalState = {
  name: '',
  email: '',
  message: '',
}

const ContactSection = () => {
  const recaptchaKey = '6LeB-dEcAAAAAHAhTcXS0tGmTvY9pt1bkdJXkK2P';
  const recaptchaRef = useRef();

  const [state, setState] = useState(inititalState);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaToken, setReCaptchaToken] = useState();
  const [message, setMessage] = useState();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (recaptchaToken !== null) {

      emailjs.sendForm('service_mwihdnt', 'template_l7wqe3k', form.current, 'user_aRyqERSIkRT7xK8O4txAM')
        .then((result) => {
          setMessage({
            className: 'bg-green-500',
            text: 'Thanks! I\'ll be in contact shortly!'
          })
          e.target.reset();
          recaptchaRef.current.reset();
          console.log(result.text);
        })
    } else {
      setMessage({
        className: 'bg-red-500',
        text: 'Sorry, there was a problem. Please try again!'
      })
      console.log(recaptchaToken);
    }
    setSubmitting(false);
  }

  // const handleSubmit = e => {
  //   for (let key in state) {
  //     if (state[key] === '') {
  //       setError(`You must provide your ${key}`)
  //       return
  //     }
  //   }
  // }

  const handleInput = e => {
    e.preventDefault();
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;


    setState(prev => ({ ...prev, [inputName]: value }))
  }

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token = 'g-recaptcha-response');
  };

  return (
    <ContactContainer id='contact'>
      <ContactHeader>Say hello!</ContactHeader>
      <ContactInfo>
        <br />
        Got an idea for a project?
        <br />
        <br />
        Lets chat!
      </ContactInfo>
      <StyledFormWrapper>
        <StyledForm ref={form} onSubmit={handleSubmit}>
          <H1>
            <span><FaPaperPlane /> Contact Me</span>
          </H1>
          <label htmlFor='name'>Name</label>
          <StyledInput
            type='text'
            name='name'
            value={state.name}
            onChange={handleInput}
            required
          />
          <Space />
          <label htmlFor='email'>Email</label>
          <StyledInput
            type='email'
            name='email'
            value={state.email}
            onChange={handleInput}
            required
          />
          <br />
          <label
            htmlFor='message'
            required
          >Message</label>
          <StyledTextArea name='message' />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <StyledButton
            disabled={submitting}
            type='submit'
          >{submitting ? 'Submitting...' : 'Send Message'}</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </ContactContainer>
  )
}

export default ContactSection;