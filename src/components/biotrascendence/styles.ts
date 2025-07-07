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

 img:first-of-type {
  padding-left: 5rem;
 }

 img:last-of-type {
    width: 30rem;
    height: 15rem;
    padding-right: 5rem;
  }
`;