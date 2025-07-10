import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
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
  margin-bottom: 3.5rem;
 }
`;

export const Paragraph = styled.p`
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ModalityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1A1A1A;
  height: 20rem;
  gap: 2rem;

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

  span {
    width: 2rem;
    height: 1px;
    background-color: white;
  }
`;

export const Capsule = styled.div`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2rem;
  width: 17rem;
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
    width: 13.5rem;
  }

  p {
    color: white;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }
`;