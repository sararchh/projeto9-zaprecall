import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';

import { MainTemplate } from './style';
import { decks } from '../../utils/question';
import FlashcardsScreen from '../Flashcards';
import FooterScreen from '../Footer';

function App() {
  const [splashScreen, setSplashScreen] = React.useState(true);
  const [counter, setCounter] = React.useState(0);
  const [rowAnswer, setRowAnswer] = React.useState([]);
  const [deck, setDeck] = React.useState(0);

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
        />
      </MainTemplate>
    );
  }



}

export default App;
