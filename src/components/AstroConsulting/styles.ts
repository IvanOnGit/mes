import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
 display: flex;
 width: 100%;
 height: 20rem;
 background-color: transparent;
 position: relative;
 overflow: hidden;

 img {
  width: 20rem;
  height: 15rem;
 }

 h2 {
  margin: 0;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
 }

 span {
  display: block;
  width: 3rem;
  height: 5px;
  background-color: black;
  margin-bottom: 1rem;
 }

 p {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  width: 15rem;
 }

 button {
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
 }
`;

export const FirstContainer = styled.div`
  background-color: #D2D2D2;
  display: flex;
  gap: 2rem;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const SecondContainer = styled.div`
  background-color: white;
  display: flex;
  gap: 2rem;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const TypesOfLecturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1A1A1A;
  gap: 2rem;
  padding: 2rem 0; /* Agregué padding para dar espacio arriba y abajo */

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap; /* Esta es la clave - permite que las cápsulas rompan línea */
`;

export const Capsule = styled.div`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2rem;
  width: 12rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 1rem;
  }

  &.last {
    width: 30rem;
  }
`;