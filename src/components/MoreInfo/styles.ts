import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  span {
    width: 1px;
    height: 8rem;
    background-color: black;
  }

  h2 {
    font-size: 1rem;
    font-weight: 600;
  }

  .Subcontainer {
    width: 13rem;
  }

  button {
    background-color: white;
    border-radius: 1rem;
    border: 1px solid black;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
      transition: all 0.3s ease;
    }
  }
`;