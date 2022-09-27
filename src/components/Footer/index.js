import React from 'react';

import { Footer, Icon } from './styles';

function FooterScreen({ qtdQuestion, counter, rowAnswer }) {

  return (
    <Footer>
      <p>{counter}/{qtdQuestion} CONCLUÍDOS</p>
      <div>
        {rowAnswer.sort((a, b) => a.index - b.index).map((i, index) => {
          if (i.value === 'error') {
            return <Icon key={index} src='./assets/img/close-circle-icon.svg' alt='player' />
          } else if (i.value === 'help') {
            return <Icon src='./assets/img/help-circle-icon.svg' alt='player' />
          } else {
            return <Icon src='./assets/img/checkmark-circle-icon.svg' alt='player' />
          }
        })}
      </div>

    </Footer>
  );
}

export default FooterScreen;