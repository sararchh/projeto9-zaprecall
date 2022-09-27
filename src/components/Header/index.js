import React from "react";

import { Container } from './styles';

function Header() {
  return (
    <Container>
     <img src="/assets/img/logo.svg" alt="Logo"></img>
     <h1>ZapRecall</h1>
    </Container>
  );
}

export default Header;