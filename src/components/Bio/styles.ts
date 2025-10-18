import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 4rem 6rem;
  gap: 4rem;
  box-sizing: border-box;

  .impacts-img {
    width: 28rem;
    height: auto;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;
    overflow-x: hidden;

    .impacts-img {
      width: 100%;
      max-width: 100%;
      order: 2;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: flex-start;
  flex: 1;
  padding-left: 5rem;
  padding-right: 5rem;
  box-sizing: border-box;

  .text-section {
    flex: 1;
    max-width: 30rem;
  }

  .evolution-img {
    width: 20rem;
    height: auto;
    flex-shrink: 0;
  }

  h2 {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: justify;
  }

  .italic-text {
    font-style: italic;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    border-top: 1px solid #ccc;
    padding-top: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
    padding-left: 0;
    padding-right: 0;
    width: 100%;

    .text-section {
      max-width: 100%;
    }

    .evolution-img {
      width: 100%;
      max-width: 100%;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
  width: 25rem;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    max-width: 100%;
  }
`;

export const Tag = styled.span`
  background-color: #e0e0e0;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
`;

export const ModalityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1A1A1A;
  padding: 4rem 2rem;
  gap: 3rem;
  box-sizing: border-box;

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 2rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;

  span {
    width: 2rem;
    height: 1px;
    background-color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    width: 100%;

    span {
      width: 1px;
      height: 1rem;
    }
  }
`;

export const Capsule = styled.div`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2rem;
  width: 17rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 5rem;
  box-sizing: border-box;

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
  }

  p {
    color: white;
    font-size: 0.8rem;
    margin: 0.3rem 0 0 0;
    padding: 0;
    font-style: italic;
  }

  @media (max-width: 768px) {
    width: calc(100% - 3rem);
    max-width: 20rem;
    min-height: 4rem;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
    
    img:first-of-type {
      display: none;
    }
  }
`;