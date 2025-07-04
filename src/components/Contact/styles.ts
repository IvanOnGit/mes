import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  width: 100%;
  gap: 10rem;

  span {
    width: 1px;
    height: 25rem;
    background-color: white;
    color: white;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;

  h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  .button-container {
    display: flex;
    gap: 1rem;

    p {
      color: white;
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }

    button {
      color: white;
      background-color: transparent;
      border: 1px solid white;
      padding: 1rem;
      display: flex;
      align-self: center;
      align-items: center;
      height: 1rem;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input, textarea {
      background-color: #1a1a1a;
      color: white;
      border: none;
      border-bottom: 2px solid white;
      padding: 0.8rem;
      font-size: 1rem;
      resize: none;
      outline: none;

    }

    textarea {
      height: 120px;
    }

    button {
      background-color: white;
      color: black;
      border: none;
      padding: 0.8rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;