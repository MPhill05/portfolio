import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  background: #001;
  height: 88vh;
`;

export const ContactHeader = styled.h1`
  color: #fff;
  text-align: center;
  padding-top: 100px;
`;

export const ContactInfo = styled.p`
  color: #fff;
  text-align: center;
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px ragba(0, 0, 0, 0.2);

  input:focus,
  textarea:focus {
    outline: none !important;
    border: 2px solid #0046C5;
  }
`;

export const H1 = styled.h1`
  font-size: 4xl;
  font-style: bold;
  display: flex;
  justify-content: center;
`;

export const Space = styled.div`
  padding: 5px;
`;

export const StyledInput = styled.input`
  background-color: #eee;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: none;
  height: 30px;
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  border-radius: 4px;
  border: none;
  height: 30px;
`;

export const StyledButton = styled.button`
  margin: 10px 0;
  background-color: #0046C5;
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;

  :hover {
    background-color: #0F3379;
    transition: background-color 0.2s ease;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;