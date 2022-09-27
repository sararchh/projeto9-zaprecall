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
  margin: 10px 0 ;
}

`;


export const ButtonStart = styled.button`
  width: 246px;
  height: 54px;
  margin-top: 20px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  cursor: pointer;

 &:hover {
  background-color: #cea2a0
}
`;

export const Content = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input {
  width: 246px;
  height: 43px;
  border-radius: 5px;
  border: none;
  padding:  0 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
}

input::placeholder {
  color: #ADADAD;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

}
`;

export const ImgLogo = styled.img`
width: 136px;
height: 161px;
`;

export const IconInput = styled.img`
position: absolute;
top: 20px;
right: 15px;
width: 13px;
height: 7px;
`;