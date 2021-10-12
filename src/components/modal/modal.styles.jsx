import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  /* width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; */
`;

export const ModalWrapper = styled.div`
  position: relative;
  top: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 70%;
  z-index: 101;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  border-radius: 10px;
  background: #fff;
  overflow-y: auto;
  padding: 20px;
  /* width: 800px;
  height: 600px;
  position: relative;
  z-index: 10;
  margin: auto; */
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  /* background: #000; */
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

export const ImgColumn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TechIcon = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 50px;
  text-align: center;
`;