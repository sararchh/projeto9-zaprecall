import React from "react";

import { decks } from '../../utils/question';

import { MainTemplate, ImgLogo, Content, ButtonStart } from './styles';

function Welcome({ setStepScreen, setDeck, setQtdGoalZap, stepScreen }) {

  const handleSelectedDeck = (e) => {
    e.preventDefault();

    if (stepScreen === 0) {
      let value = e.target.formDeck.value;
      if (value === '') {
        alert('Selecione um Deck')
        return;
      }
      setStepScreen(1);
      setDeck(value);
    } else {
      let inputZap = e.target.zap.value;

      if (inputZap === '0' || inputZap === '') {
        alert('Digite um valor válido')
        return;
      }
      setQtdGoalZap(Number(inputZap));
      setStepScreen(2);
    }
  }

  return (
    <MainTemplate>
      <ImgLogo src="/assets/img/logo.svg" alt="Logo" />
      <h1>ZapRecall</h1>

      <form onSubmit={handleSelectedDeck}>
        <Content>

          {stepScreen === 1 ?
            (<input name='zap' type='number' placeholder='Digite sua meta de zaps...' />)
            :
            (<select name="formDeck" id="formDeck">
              <option value="">Escolha seu Deck</option>
              {decks.map((item, index) => (
                <option key={index} value={index}>{item.name}</option>
              ))}
            </select>)
          }

        </Content>

        <ButtonStart type="submit">Iniciar Recall!</ButtonStart>
      </form>
    </MainTemplate>
  )
}

export default Welcome;