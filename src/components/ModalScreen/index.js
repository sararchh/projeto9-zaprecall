import React from 'react';

import { BiHomeHeart } from "react-icons/bi";

import { Container, Modal } from './styles';

function ModalScreen({ text, handleRestartZap }) {
  return (
    <Container>
      <Modal>
        <h1>{text}</h1>
        <img src={text === 'Parabéns' ? './assets/img/party.svg' : './assets/img/sad.svg'} alt='img-party' />
        <button onClick={handleRestartZap}>Inicio <BiHomeHeart /></button>
      </Modal>
    </Container>
  );
}

export default ModalScreen;