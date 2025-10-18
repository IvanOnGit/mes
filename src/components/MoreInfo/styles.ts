import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to bottom, #000000, #1F1F1F, #717171, white);
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    z-index: 2;
    text-align: center;
    width: 15rem;
    color: white;
  }

  .Subcontainer {
    width: 13rem;
    z-index: 2;
  }

  button {
    background-color: white;
    border: 1px solid black;
    margin-left: 4rem;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 2;

    &:hover {
      background-color: black;
      color: white;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
    flex-direction: column;
    margin-left: -2rem;

    h2 {
      font-size: 0.9rem;
      text-align: center;
      padding: 0.5rem;
    }

    button {
      padding: 0.7rem;
      font-size: 0.8rem;
      margin-left: 3rem;
    }

    .Subcontainer {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const MandalaImage = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 1;

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;