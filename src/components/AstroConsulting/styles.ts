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