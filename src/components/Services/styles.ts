import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  background-image: url('/images/Textura fondo.svg');
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  h1 {
    color: white;
    font-size: 5rem;
    font-weight: 400;
  }
`;