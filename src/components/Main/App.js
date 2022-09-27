import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';

import { MainTemplate } from './style';
import { deckReact, deckArray } from '../../utils/question';
import FlashcardsScreen from '../Flashcards';
import FooterScreen from '../Footer';

function App() {
  const [splashScreen, setSplashScreen] = React.useState(true);
  const [counter, setCounter] = React.useState(0);
  const [rowAnswer, setRowAnswer] = React.useState([]);
  const [deck, setDeck] = React.useState(deckReact);
  const qtdQuestion = deckReact.length;


  if (splashScreen) {
    return (
      <Welcome 
      setSplashScreen={setSplashScreen} 
      setDeck={setDeck}
      />
    )
  } else {
    return (
      <MainTemplate>
        <Header />
        <div className='deck'>
          {deck.map((item, index) => (
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
          qtdQuestion={qtdQuestion}
          rowAnswer={rowAnswer}
        />
      </MainTemplate>
    );
  }



}

export default App;
