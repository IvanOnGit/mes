import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 40rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  margin-left: 6.81rem;
  width: 21rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    width: 15rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  margin-right: 1rem;
  gap: 3rem;
  width: 30rem;

  a {
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;