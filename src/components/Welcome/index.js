import React from "react";

import { decks } from '../../utils/question';

import { MainTemplate, ImgLogo, Content, ButtonStart } from './styles';

function Welcome({ setSplashScreen, setDeck }) {

  const handleSelectedDeck = (e) => {
    e.preventDefault();

    let value = e.target.formDeck.value;

    if (value === '') {
      alert('Selecione um Deck') 
      return;
    } 
    setSplashScreen(false);
    setDeck(value);
  }

  return (
    <MainTemplate>
      <ImgLogo src="/assets/img/logo.svg" alt="Logo" />
      <h1>ZapRecall</h1>

      <form onSubmit={handleSelectedDeck}>
        <Content>
          <select name="formDeck" id="formDeck">
            <option value="">Escolha seu Deck</option>
            {decks.map((item, index)=> (
              <option key={index} value={index}>{item.name}</option>
            ))}
          </select>
        </Content>

        <ButtonStart type="submit">Iniciar Recall!</ButtonStart>
      </form>
    </MainTemplate>
  )
}

export default Welcome;