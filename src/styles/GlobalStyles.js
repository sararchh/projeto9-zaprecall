import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root{
  --cor-fundo: #FB6B6B;
  --cor-fundo-card: #FFFFD4;
  --cor-nao-lembrei: #FF3030;
  --cor-quase-nao-lembrei: #FF922E;
  --cor-zap: #2FBE34;
  --preto: #333333;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
     font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
  -webkit-font-smoothing: antialiased;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--preto);
  font-family: 'Righteous', cursive;
}

body, input, textarea, button {
  font-family: 'Righteous', cursive;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 400;
  font-family: 'Righteous', cursive;
}

button{
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Recursive', sans-serif;
}

a{
  text-decoration: none;
  text-align: center;
  color: var(--text-title) !important;
}

`