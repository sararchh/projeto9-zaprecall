import React from 'react';

import { Flashcard, TitleQuestion, IconPlayer, IconArrow, FlashcardQuestion, ContentButton } from './styles';

function FlashcardsScreen({ questions, answer, index, counter, setCounter, setRowAnswer, rowAnswer }) {
  const [step, setStep] = React.useState(0);

  const handleFlipFlashcard = () => {
    setStep(2);
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  const handleError = () => {
    setStep(3);
    let newArray = [...rowAnswer, {index: index, value: 'error'}];
    setRowAnswer(newArray);
  }

  const handleHelp = () => {
    setStep(4);
    let newArray = [...rowAnswer, {index: index, value: 'help'}];
    setRowAnswer(newArray);
  }

  const handleHit = () => {
    setStep(5);
    let newArray = [...rowAnswer, {index: index, value: 'hit'}];
    setRowAnswer(newArray);
  }

  return (
    <>
      {step === 0 && (
        <Flashcard onClick={() => setStep(1)}>
          <TitleQuestion>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/play-outline-icon.svg' alt='player' />
        </Flashcard>
      )}

      {step === 1 && (
        <FlashcardQuestion>
          <p>{questions}</p>
          <IconArrow src='./assets/img/setinha.svg' alt='setinha' onClick={handleFlipFlashcard} />
        </FlashcardQuestion>
      )}

      {step === 2 && (
        <>
          <FlashcardQuestion>
            <p>{answer}</p>
            <ContentButton>
              <button onClick={handleError}>Não lembrei</button>
              <button onClick={handleHelp}>Quase não lembrei</button>
              <button onClick={handleHit}>Zap</button>
            </ContentButton>
          </FlashcardQuestion>
        </>
      )}

      {step === 3 && (
        <Flashcard>
          <TitleQuestion className='error'>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/close-circle-icon.svg' alt='player' />
        </Flashcard>
      )}
      
      {step === 4 && (
        <Flashcard>
          <TitleQuestion className='help'>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/help-circle-icon.svg' alt='player' />
        </Flashcard>
      )}
      
      {step === 5 && (
        <Flashcard>
          <TitleQuestion className='hit'>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/checkmark-circle-icon.svg' alt='player' />
        </Flashcard>
      )}
    </>
  )
}

export default FlashcardsScreen;