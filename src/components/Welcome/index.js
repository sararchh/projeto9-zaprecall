import React from "react";

import { MainTemplate } from './styles';

function Welcome({setSplashScreen}) {
  return (
    <MainTemplate>
       <img src="/assets/img/logo.svg" alt="Logo"/>
       <h1>ZapRecall</h1>

      <button onClick={()=>setSplashScreen(false)}>Iniciar Recall!</button>
    </MainTemplate>
  )
}

export default Welcome;