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
  top: 35rem;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 50rem !important;
  height: 40rem;
  z-index: 101;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 10px;
  background: #000;
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

  @media screen and (max-width: 768px) {
    top: 26rem;
    width: 90%;
    height: 90%;
    grid-template-columns: auto;
}

/* @media screen and (min-width: 769px) {
  @media screen and (max-width: 1036px) {
    top: 28rem;
  }
} */
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #fff;

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5em;
    }

    line-height: unset;
  }
`;

export const ProblemSolve = styled.div`
  width: 100%;
  height: 20rem;
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

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
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

  @media screen and (max-width: 768px) {
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const ModalButtons = styled.a`

  .modalBtn {
    display: inline-block;
    cursor: pointer;
    margin: 2rem;
    font-size: 1.2rem;
    color: #000;
    text-transform: capitalize;
    padding: 0 10px;

    :hover {
      color: #fff;
      background-color: grey;
      border: none;
      transition: background-color 0.2s ease;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin: 1rem;
    }
  }

  .rightBtn {
    margin-left: 30px;

    @media screen and (max-width: 768px) {
      margin-left: 0px;
    }

  }
`;

export const ModalLink = styled.a`
  width: 80%;

  @media screen and (max-width: 768px) {
      width: 20%;
    }

    @media screen and (min-width: 300px) {
      @media screen and (max-width: 400px) {
        width: 48%;
      }
    }
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