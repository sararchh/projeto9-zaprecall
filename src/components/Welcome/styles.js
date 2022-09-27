import styled from 'styled-components';

export const MainTemplate = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);

  h1 {
  font-family: "Righteous", cursive;
  font-size: 36px;
  color: white;
  margin-top: 10px;
}

img {
  width: 136px;
  height: 161px;
}

button {
  width: 246px;
  height: 54px;
  margin-top: 20px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background-color: #cea2a0
}
`;