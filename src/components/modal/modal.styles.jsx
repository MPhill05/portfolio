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
`;

export const ModalWrapper = styled.div`
  position: relative;
  top: 25rem;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 35rem !important;
  z-index: 101;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  border-radius: 10px;
  background: #fff;
  width: 80%;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0,0,0,.5);
}
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;  
`;

export const ProblemSolve = styled.div`
  width: 100%;
  height: 15rem;
  overflow-y: scroll;

  p {
    margin-bottom: 1rem;
    margin-right: 30px;
    margin-left: 30px;
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

  .modalBtn {
    display: inline-block;
    cursor: pointer;
    margin: 2rem;
    font-size: 1.2rem;
    ${'' /* background-color: #0046C5; */}
    color: #000;
    text-transform: capitalize;
    border-radius: 5px;
    padding: 0 10px;

    :hover {
      color: #fff;
      background-color: #0F3379;
      transition: background-color 0.2s ease;
    }
  }

  .rightBtn {
    margin-left: 30px;
  }
`;

export const ModalLink = styled.a`
  width: 80%;
`;

export const ImgColumn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TechIcon = styled.div`
  width: 100%;
  height: 40%;
  padding: 20px;
  text-align: center;
`;