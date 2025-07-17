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
  align-items: flex-start; /* Cambio aquí: de center a flex-start */
  gap: 1rem;
  margin-top: 7rem;

  span {
    width: 1px;
    height: 22.5rem;
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
    height: 4rem;
    margin-left: 1rem;
  }

  p {
    color: white;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 15rem;
    height: 12rem;
    text-align: justify;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
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
    margin-top: 1rem;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #242424;
      transition: all 0.3s ease;
    }
  }
`;

export const RecomendationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #404040;
  height: 20rem;
  width: 100%;
  gap: 2rem;
  margin-top: 4rem;
`;

export const Recomendation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 12rem;
  background-color: #161616;
  border-radius: 2rem;
  gap: 2rem;

  p {
    color: white;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 15rem;
  }
`;

export const UserFake = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-bottom: 4rem;
  background-color: white;
`;

export const StarsAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// Nuevos estilos para el modal con animaciones
export const ModalOverlay = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isClosing ? 0 : 1};
  transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div<{ $isClosing: boolean }>`
  background-color: black;
  border: 1px solid white;
  border-radius: 1rem;
  width: 800px;
  position: relative;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding: 2rem;
  transform: ${props => props.$isClosing ? 'scale(0.9)' : 'scale(1)'};
  opacity: ${props => props.$isClosing ? 0 : 1};
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: ${props => props.$isClosing ? 'none' : 'modalOpen 0.3s ease'};

  @keyframes modalOpen {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 200;
    width: 18rem;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background-color: #242424;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
  }
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: white;
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 17rem;
    text-align: justify;
  }
`;

export const ModalImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin-bottom: 1rem;
  }

  img {
    width: 15rem;
    height: 15rem;
  }

  img.meditatingBack {
    margin-top: 1rem;
    height: 22rem;

    display: none;
  }

  h4 {
    color: white;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 15rem;
  }

  span {
    margin-top: 0.3rem;
    width: 2.5rem;
    height: 5px;
    background-color: white;
  }
`;