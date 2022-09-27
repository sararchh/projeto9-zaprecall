import React from "react";

import { deckReact, deckArray } from '../../utils/question';

import { MainTemplate, ImgLogo, Content, ButtonStart } from './styles';

function Welcome({ setSplashScreen, setDeck }) {

  const handleSelectedDeck = (e) => {
    e.preventDefault();

    let value = e.target.formDeck.value;

    if (value === '') {
      alert('Selecione um Deck')
    } else if (value === 'deckReact') {
      setSplashScreen(false);
      setDeck(deckReact);
    } else if (value === 'deckArray') {
      setSplashScreen(false);
      setDeck(deckArray);
    }
  }

  return (
    <MainTemplate>
      <ImgLogo src="/assets/img/logo.svg" alt="Logo" />
      <h1>ZapRecall</h1>

      <form onSubmit={handleSelectedDeck}>
        <Content>
          <select name="formDeck" id="formDeck">
            <option value="">Escolha seu Deck</option>
            <option value="deckReact">deckReact</option>
            <option value="deckArray">deckArray</option>
          </select>
        </Content>

        <ButtonStart type="submit">Iniciar Recall!</ButtonStart>
      </form>
    </MainTemplate>
  )
}

export default Welcome;