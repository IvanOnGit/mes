import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: white;
  padding: 4rem 6rem;
  gap: 4rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;
    overflow-x: hidden;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: justify;
    max-width: 29rem;
  }

  .italic-text {
    font-style: italic;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;

    p {
      font-size: 0.9rem;
      max-width: 100%;
    }
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .top-section {
    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.7;
      text-align: justify;
      max-width: 29rem;
    }
  }

  .image-section {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      width: 100%;
      margin-right: 20rem;
      max-width: 28rem;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    .top-section p {
      font-size: 0.9rem;
      max-width: 100%;
    }

    .image-section {
      width: 100%;
      
      img {
        max-width: 100%;
        margin-right: 0;
      }
    }
  }
`;

export const ModalityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 2rem;
  width: 100%;
  background-color: #1A1A1A;
  box-sizing: border-box;

  h2 {
    color: white;
    margin: 0;
    font-size: 3rem;
    font-weight: 100;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 2rem;

    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }

  // Agranda el 3er y 7mo ícono
  div:nth-child(3) img,
  div:nth-child(7) img {
    width: 7rem;
    height: 7rem;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 100%;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;

    img {
      width: 6rem;
      height: 6rem;
    }

    div:nth-child(3) img,
    div:nth-child(7) img {
      width: 6rem;
      height: 6rem;
    }
  }
`;