import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 80px;
  top: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  h1 {
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    margin-left: 10px;
  }

  img {
    width: 52px;
    height: 60px;
  }
`;