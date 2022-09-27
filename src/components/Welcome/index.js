import React from "react";

import { MainTemplate, IconInput, ImgLogo, Content, ButtonStart} from './styles';

function Welcome({ setSplashScreen, setDeck }) {
  return (
    <MainTemplate>
      <ImgLogo src="/assets/img/logo.svg" alt="Logo" />
      <h1>ZapRecall</h1>

      <Content>
        <input placeholder="Escolha seu Deck" />
        <button>
          <IconInput src="./assets/img/setinha-input.svg" alt="setinha" />
        </button>
      </Content>

      <ButtonStart onClick={() => setSplashScreen(false)}>Iniciar Recall!</ButtonStart>
    </MainTemplate>
  )
}

export default Welcome;