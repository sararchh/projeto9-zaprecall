import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';

import { MainTemplate } from './style';
import { deckReact } from '../../utils/question';
import FlashcardsScreen from '../Flashcards';
import FooterScreen from '../Footer';

function App() {
  const [splashScreen, setSplashScreen] = React.useState(true);
  const [counter, setCounter] = React.useState(0);
  const qtdQuestion = deckReact.length;


  if (splashScreen) {
    return (
      <Welcome setSplashScreen={setSplashScreen} />
    )
  } else {
    return (
      <MainTemplate>
        <Header />
        <div className='deck'>
          {deckReact.map((item, index) => (
            <FlashcardsScreen
              key={index}
              index={index}
              questions={item.Q}
              answer={item.R}
              counter={counter}
              setCounter={setCounter}
            />
          ))}
        </div>
        <FooterScreen
          counter={counter}
          qtdQuestion={qtdQuestion}
        />
      </MainTemplate>
    );
  }



}

export default App;
