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

export const StagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1A1A1A;
  height: 20rem;
  gap: 2rem;
  overflow: hidden;
  box-sizing: border-box;

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1.5rem;
    gap: 1.5rem;

    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: visible;

  span {
    width: 2rem;
    height: 1px;
    background-color: white;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    width: 100%;

    span {
      width: 1px;
      height: 1rem;
      margin: 0;
    }
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
  box-sizing: border-box;

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 1rem;
  }

  p {
    color: white;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: calc(100% - 3rem);
    max-width: 20rem;
    padding: 1rem;

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;