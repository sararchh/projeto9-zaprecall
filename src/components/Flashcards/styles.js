import styled from "styled-components";

export const Flashcard = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
`;

export const FlashcardQuestion = styled.div`
  min-height: 130px;
  max-width: 299px;
  width: 299px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--cor-fundo-card);
  cursor: default;
  padding: 20px 10px;
  margin: 10px 0px;
  border-radius: 5px;

  p {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TitleQuestion = styled.h5`
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    font-family: 'Recursive', sans-serif;
`;

export const IconPlayer = styled.img`
    width: 20px;
    height: 20px;
`;

export const IconArrow = styled.img`
  width: 30px;
  height: 20px;

  position: absolute;
  bottom: 5px;
  right: 15px;
`;