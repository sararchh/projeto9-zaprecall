import React from 'react';

import { Flashcard, TitleQuestion, IconPlayer, IconArrow, FlashcardQuestion, ContentButton } from './styles';

function FlashcardsScreen({ questions, answer, index }) {
  const [step, setStep] = React.useState(0);

  return (
    <>
      {step === 0 && (
        <Flashcard>
          <TitleQuestion>Pergunta {index + 1}</TitleQuestion>
          <IconPlayer src='./assets/img/play-outline-icon.svg' alt='player' onClick={() => setStep(1)} />
        </Flashcard>
      )}

      {step === 1 && (
        <FlashcardQuestion>
          <p>{questions}</p>
          <IconArrow src='./assets/img/setinha.svg' alt='setinha' onClick={() => setStep(2)} />
        </FlashcardQuestion>
      )}

      {step === 2 && (
        <>
          <FlashcardQuestion>
            <p>{answer}</p>
            <ContentButton>
              <button>Não lembrei</button>
              <button>Quase não lembrei</button>
              <button>Zap</button>
            </ContentButton>
          </FlashcardQuestion>

        </>
      )}

    </>
  )
}

export default FlashcardsScreen;