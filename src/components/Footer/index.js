import React from 'react';

import { Footer } from './styles';

function FooterScreen({qtdQuestion}) {
  return (
    <Footer>
      <p>0/{qtdQuestion} CONCLUÍDOS</p>
    </Footer>
  );
}

export default FooterScreen;