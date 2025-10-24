import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  background-image: url('/images/fondo socalo.jpg');
  background-size: cover;

  .Row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
    z-index: 2;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    width: 22rem;
    color: white;
    margin: 0;
    line-height: 1.8rem;
  }

  h3 {
    color: white;
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
    margin: 0;
    line-height: 1.8rem;
    width: 22rem;
    position: absolute;
    margin-right: 27rem;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  button {
    background-color: white;
    border: 1px solid black;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 2;
    width: 10rem;
    font-size: 0.9rem;
    margin: 0;
    align-self: flex-start; /* Asegurar alineación superior */
    margin-left: 27rem;

    @media (max-width: 768px) {
      margin-left: 0;
    }

    &:hover {
      background-color: black;
      color: white;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
    gap: 0.5rem;

    .Row {
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
    }

    h2 {
      font-size: 1rem;
      width: auto;
    }

    h3 {
      width: auto;
      padding-top: 0;
    }

    button {
      font-size: 0.8rem;
      padding: 0.7rem;
    }
  }
`;