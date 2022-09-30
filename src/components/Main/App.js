import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';

import { MainTemplate } from './style';
import { decks } from '../../utils/question';
import FlashcardsScreen from '../Flashcards';
import FooterScreen from '../Footer';

function App() {
  const [stepScreen, setStepScreen] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [rowAnswer, setRowAnswer] = React.useState([]);
  const [deck, setDeck] = React.useState(0);
  const [qtdGoalZap, setQtdGoalZap] = React.useState(0);

  const handleRestartZap = () => {
    setStepScreen(0);
    setCounter(0);
    setQtdGoalZap(0);
    setRowAnswer([]);
  }

  if (stepScreen === 0 || stepScreen === 1) {
    return (
      <>
        <Welcome
          setStepScreen={setStepScreen}
          setDeck={setDeck}
          stepScreen={stepScreen}
          setQtdGoalZap={setQtdGoalZap}
        />
      </>
    )
  } else if (stepScreen === 2) {
    return (
      <MainTemplate>
        <Header />
        <div className='deck'>
          {decks[deck].questions.map((item, index) => (
            <FlashcardsScreen
              key={index}
              index={index}
              questions={item.Q}
              answer={item.R}
              counter={counter}
              setCounter={setCounter}
              rowAnswer={rowAnswer}
              setRowAnswer={setRowAnswer}
            />
          ))}
        </div>
        <FooterScreen
          counter={counter}
          qtdQuestion={decks[deck].questions.length}
          rowAnswer={rowAnswer}
          setQtdGoalZap={setQtdGoalZap}
          qtdGoalZap={qtdGoalZap}
          handleRestartZap={handleRestartZap}
        />
      </MainTemplate>
    );
  }



}

export default App;
