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
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;