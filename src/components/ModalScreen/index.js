import React from 'react';

import { Container, Modal } from './styles';

function ModalScreen({text}) {
  return (
    <Container>
      <Modal>
        <h1>{text}</h1>
        <img src={text === 'Parabéns' ? './assets/img/party.svg' : './assets/img/sad.svg'} alt='img-party'/>
      </Modal>
    </Container>
  );
}

export default ModalScreen;