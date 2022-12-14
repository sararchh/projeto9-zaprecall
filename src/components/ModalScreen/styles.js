import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  width: 375px;
  height: 100%;
  background-color: var(--gray);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  max-width: 300px;
  width: 300px;
  height: 300px;

  z-index: 10;

  padding: 19px;
  border-radius: 9px;

  color: var(--white);
  background-color: var(--cor-modal);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
  }

  button {
  width: 120px;
  height: 40px;
  margin-top: 20px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--cor-zap);
  }

  button:hover {
  filter: brightness(0.7);
}

svg {
  width: 20px;
  height: 20px;
  margin: 0 2px 4px 3px;
  }
`;