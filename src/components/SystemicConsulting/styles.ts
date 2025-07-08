import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 background-color: white;
 height: 20rem;
 gap: 2rem;
 padding: 1rem;

 h2 {
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border-bottom: 3px solid black;
 }

 p {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  width: 20rem;
 }

 button {
  font-size: 1rem;
  color: white;
  background-color: black;
  padding: 0.5rem;
  margin-left: 10rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
 }
`;

export const Paragraph = styled.p`
  border-bottom: 1px solid black;
  padding-bottom: 1.8rem;
`;

export const ModalityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  height: 20rem;
  width: 100%;
  background-color: #1A1A1A;

  h2 {
    color: white;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 100;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;