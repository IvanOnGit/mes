import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: black;
`;

export const AboutMeContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 40rem;
  margin-bottom: 2rem;

  span {
    width: 44.5rem;
    height: 10px;
    margin-top: 7rem;
    background-color: #1C1C1C;
  }

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 200;
    margin: 0;
    padding: 0;
  }
`;

export const IconsAndButtons = styled.div`
  display: flex;
  gap: 20rem;
`;

export const TitleAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 4rem;
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 15rem;
  height: 15rem;
  justify-items: center;
  align-items: center;
  
  img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 8rem;

  button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;