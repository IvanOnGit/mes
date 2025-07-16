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

export const CollageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  img {
    width: 80rem;
    height: 35rem;
    margin-top: 5rem;
    margin-bottom: 14rem;
    object-fit: contain;
  }

  img:last-of-type {
    width: 55rem;
    height: 10rem;
    margin-top: 50rem;
    object-fit: contain;
    position: absolute;
  }
`;

export const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    width: 62.5rem;
    height: 10px;
    background-color: #1C1C1C;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }
`;

export const TitleTreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  

  h2 {
      color: white;
      font-size: 2rem;
      font-weight: 200;
      margin: 0;
      padding: 0;
      width: 100%;
    }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 7rem;

  span {
    width: 1px;
    height: 20.1rem;
    margin-top: 2rem;
    background-color: white;
    color: white;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    color: white;
    font-size: 1.3rem;
    font-weight: 200;
    margin: 0;
    padding: 0;
    width: 16rem;
    margin-left: 1rem;
  }

  p {
    color: white;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 15rem;
    text-align: justify;
  }

  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 15rem;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #242424;
      transition: all 0.3s ease;
    }
  }
`;