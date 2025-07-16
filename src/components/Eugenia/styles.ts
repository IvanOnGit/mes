import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 0;
  width: 100%;
  margin-top: 5rem;
  height: 41rem;
  position: absolute;
  background: linear-gradient(to top, #D9D9D9, #717171, #1F1F1F, #000000);
`;

export const StyledEugenia = styled.img`
  width: 26rem;
  height: 26rem;
  margin-left: 2rem;
  margin-top: 10rem;
  margin-right: 30rem;
  height: auto;
  position: absolute;
`;

export const StyledMantra = styled.img`
  width: 40rem;
  height: 40rem;
  margin-top: 1rem;
  margin-right: 30rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 15.5rem;
  margin-left: 37rem;
  gap: 0.2rem;

  h1 {
    color: white;
    font-size: 2rem;
    width: 32rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: white;
    font-size: 2.3rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    width: 10rem;
  }
`;