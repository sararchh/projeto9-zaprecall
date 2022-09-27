import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';

import { MainTemplate } from './style';
import { deckReact } from '../../utils/question';
import FlashcardsScreen from '../Flashcards';

function App() {
  const [splashScreen, setSplashScreen] = React.useState(true);

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
          <FlashcardsScreen key={index} index={index} questions={item.Q} answer={item.R} />
        ))}
        </div>
      </MainTemplate>
    );
  }



}

export default App;
