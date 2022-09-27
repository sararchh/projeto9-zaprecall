import React from 'react';

import { Footer } from './styles';

function FooterScreen({qtdQuestion, counter}) {
  return (
    <Footer>
      <p>{counter}/{qtdQuestion} CONCLUÍDOS</p>
    </Footer>
  );
}

export default FooterScreen;