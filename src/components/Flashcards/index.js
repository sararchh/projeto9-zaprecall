import React from 'react';

import { Flashcard, TitleQuestion, Icon, IconArrow, FlashcardQuestion, ContentButton } from './styles';

function FlashcardsScreen({ questions, answer, index, counter, setCounter, setRowAnswer, rowAnswer }) {
  const [step, setStep] = React.useState(0);

  const handleFlipFlashcard = () => {
    setStep(2);
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  const handleError = () => {
    setStep(3);
    let newArray = [...rowAnswer, { index: index, value: 'error' }];
    setRowAnswer(newArray);
  }

  const handleHelp = () => {
    setStep(4);
    let newArray = [...rowAnswer, { index: index, value: 'help' }];
    setRowAnswer(newArray);
  }

  const handleHit = () => {
    setStep(5);
    let newArray = [...rowAnswer, { index: index, value: 'hit' }];
    setRowAnswer(newArray);
  }

  return (
    <>
      {step === 0 && (
        <Flashcard data-identifier="flashcard" >
          <TitleQuestion data-identifier="flashcard-index-item">Pergunta {index + 1}</TitleQuestion>
          <Icon data-identifier="flashcard-show-btn" onClick={() => setStep(1)} src='./assets/img/play-outline-icon.svg' alt='player' />
        </Flashcard>
      )}

      {step === 1 && (
        <FlashcardQuestion>
          <p>{questions}</p>
          <IconArrow data-identifier="flashcard-turn-btn" src='./assets/img/setinha.svg' alt='setinha' onClick={handleFlipFlashcard} />
        </FlashcardQuestion>
      )}

      {step === 2 && (
        <>
          <FlashcardQuestion>
            <p ata-identifier="flashcard-answer">{answer}</p>
            <ContentButton>
              <button onClick={handleError} data-identifier="forgot-btn">Não lembrei</button>
              <button onClick={handleHelp} data-identifier="almost-forgot-btn">Quase não lembrei</button>
              <button onClick={handleHit} data-identifier="zap-btn">Zap</button>
            </ContentButton>
          </FlashcardQuestion>
        </>
      )}

      {step === 3 && (
        <Flashcard>
          <TitleQuestion data-identifier="flashcard-index-item" className='error'>Pergunta {index + 1}</TitleQuestion>
          <Icon src='./assets/img/close-circle-icon.svg' alt='icon-error' data-identifier="flashcard-status" />
        </Flashcard>
      )}

      {step === 4 && (
        <Flashcard>
          <TitleQuestion data-identifier="flashcard-index-item" className='help'>Pergunta {index + 1}</TitleQuestion>
          <Icon src='./assets/img/help-circle-icon.svg' alt='icon-help' data-identifier="flashcard-status"/>
        </Flashcard>
      )}

      {step === 5 && (
        <Flashcard>
          <TitleQuestion data-identifier="flashcard-index-item" className='hit'>Pergunta {index + 1}</TitleQuestion>
          <Icon src='./assets/img/checkmark-circle-icon.svg' alt='icon-hit' data-identifier="flashcard-status" />
        </Flashcard>
      )}
    </>
  )
}

export default FlashcardsScreen;