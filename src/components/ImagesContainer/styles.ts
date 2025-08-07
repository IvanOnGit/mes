// styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  /* Vista Desktop */
  .desktop-view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0;
  }

  /* Vista Mobile - oculta por defecto */
  .mobile-view {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }

  @media (max-width: 768px) {
    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  flex: 1;
  width: calc(100% / 3);
  height: 20rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;



export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;