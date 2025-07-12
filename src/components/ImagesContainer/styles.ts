import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0;

  img {
    flex: 1;
    width: calc(100% / 3);
    height: 10rem;
    object-fit: cover;
    height: 20rem;
  }
`;