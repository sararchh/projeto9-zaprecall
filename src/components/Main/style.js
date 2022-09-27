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
  padding: 150px 0;

  .deck {
  max-height: 400px;
  overflow-y: auto;
}

  .deck::-webkit-scrollbar {
  display: none;
  }
`;