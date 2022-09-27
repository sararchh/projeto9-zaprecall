import React from 'react';

import { Flashcard, TitleQuestion, IconPlayer, IconArrow, FlashcardQuestion, ContentButton } from './styles';

function FlashcardsScreen({ questions, answer, index, counter, setCounter }) {
  const [step, setStep] = React.useState(0);

  const handleFlipFlashcard = () => {
    setStep(2);
    let newCounter = counter + 1;
    setCounter(newCounter);
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
              <button onClick={() => setStep(3)}>Não lembrei</button>
              <button onClick={() => setStep(4)}>Quase não lembrei</button>
              <button onClick={() => setStep(5)}>Zap</button>
            </ContentButton>
          </FlashcardQuestion>
        </>
      )}

      {step === 3 && (
        <Flashcard onClick={() => setStep(1)}>
          <TitleQuestion className='error'>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/close-circle-icon.svg' alt='player' />
        </Flashcard>
      )}
      
      {step === 4 && (
        <Flashcard onClick={() => setStep(1)}>
          <TitleQuestion className='help'>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/help-circle-icon.svg' alt='player' />
        </Flashcard>
      )}
      
      {step === 5 && (
        <Flashcard onClick={() => setStep(1)}>
          <TitleQuestion className='hit'>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/checkmark-circle-icon.svg' alt='player' />
        </Flashcard>
      )}
    </>
  )
}

export default FlashcardsScreen;