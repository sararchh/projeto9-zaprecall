import React from 'react';
import ModalScreen from '../ModalScreen';

import { Footer, Icon } from './styles';

function FooterScreen({ qtdQuestion, counter, rowAnswer, qtdGoalZap, handleRestartZap }) {
  const [showModal, setShowModal] = React.useState(false);
  const [text, setText] = React.useState('Parabéns');

  React.useEffect(() => {
    const filterZap = rowAnswer.filter((i) => i.value === 'hit');

    if (rowAnswer.length === qtdQuestion && filterZap.length >= qtdGoalZap) {
      setShowModal(true);
    } else if (rowAnswer.length === qtdQuestion && filterZap.length < qtdGoalZap) {
      setText('Putz');
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowAnswer])

  return (
    <>
      {showModal && <ModalScreen text={text} handleRestartZap={handleRestartZap}/>}

      <Footer>
        <p data-identifier="flashcard-counter">{counter}/{qtdQuestion} CONCLUÍDOS</p>
        <div>
          {rowAnswer.sort((a, b) => a.index - b.index).map((i, index) => {
            if (i.value === 'error') {
              return <Icon key={index} src='./assets/img/close-circle-icon.svg' alt='player' />
            } else if (i.value === 'help') {
              return <Icon key={index} src='./assets/img/help-circle-icon.svg' alt='player' />
            } else {
              return <Icon key={index} src='./assets/img/checkmark-circle-icon.svg' alt='player' />
            }
          })}
        </div>
      </Footer>
    </>
  );
}

export default FooterScreen;