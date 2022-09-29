import React from 'react';

import { Footer, Icon } from './styles';

function FooterScreen({ qtdQuestion, counter, rowAnswer, qtdGoalZap }) {

  React.useEffect(() => {
    const filterZap = rowAnswer.filter((i) => i.value === 'hit');
    console.log('filterZap', filterZap)

    if (rowAnswer.length === qtdQuestion && filterZap.length >= qtdGoalZap) {
      alert('Parabens')
    } else if (rowAnswer.length === qtdQuestion && filterZap.length < qtdGoalZap) (
      alert('Putz')
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowAnswer])

  return (
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
  );
}

export default FooterScreen;