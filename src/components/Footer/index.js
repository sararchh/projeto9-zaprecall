import React from 'react';

import { Footer, Icon } from './styles';

function FooterScreen({ qtdQuestion, counter, rowAnswer }) {
  const [finished, setFinished] = React.useState(false);

  React.useEffect(() => {
    verifyCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const verifyCounter = () => {
    if (counter === qtdQuestion) {
      setFinished(true);
    }
  }

  return (
    <Footer>

      {finished === true ?
        (<div>
          {rowAnswer.sort((a, b) => a.index - b.index).map((i, index) => {
            if (i.value === 'error') {
              return <Icon key={index} src='./assets/img/close-circle-icon.svg' alt='player' />
            } else if (i.value === 'help') {
              return <Icon src='./assets/img/help-circle-icon.svg' alt='player' />
            } else {
              return <Icon src='./assets/img/checkmark-circle-icon.svg' alt='player' />
            }
          })}
        </div>)
        :
        <p>{counter}/{qtdQuestion} CONCLUÍDOS</p>
      }

    </Footer>
  );
}

export default FooterScreen;