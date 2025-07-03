import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  background-image: url('/images/Textura fondo.svg');
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;

  h1 {
    color: white;
    font-size: 5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 5rem;
  transition: all 0.8s ease;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  
  &.expanded {
    gap: 0;
    align-items: stretch;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.8s ease;
  
  &.expanded {
    flex: 1;
    justify-content: center;
    padding: 2rem;
  }
`;

export const TitleItem = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 1rem 0;
  border-radius: 8px;
  
  &.hidden {
    opacity: 0;
    transform: translateY(-20px);
    max-height: 0;
    padding: 0;
    margin: 0;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(0);
  }
  
  &.active.expanded {
    background-color: transparent;
    transform: translateX(0);
    padding: 0;
  }

  h2 {
    color: white;
    font-size: 1.2rem;
    font-weight: 200;
    border-bottom: 1px solid white;
    padding-bottom: 1rem;
    margin: 0;
    transition: all 0.5s ease;
  }
  
  &.active.expanded h2 {
    font-size: 2rem;
    font-weight: 300;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
    opacity: 1;
    transition: all 0.5s ease;
  }

  /* Ocultar el título cuando se muestra el contenido */
  &.show-content h2 {
    opacity: 0;
    transform: translateY(-20px);
    margin-bottom: 0;
  }

  &:hover h2 {
    color: white;
    border-bottom-color: white;
  }

  &.active h2 {
    color: white;
    border-bottom-color: white;
    font-weight: 300;
  }
`;

export const ExpandedDescription = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.6s ease;
  transform: translateY(20px);
  
  &.show {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
  
  .service-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;

    button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;

      &.btn-primary {
        background-color: white;
        color: black;

        &:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }
      }

      &.btn-secondary {
        background-color: transparent;
        color: white;
        border: 2px solid white;

        &:hover {
          background-color: white;
          color: black;
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 1.5rem;
  transition: all 0.8s ease;
  
  &.expanded {
    flex: 1;
    gap: 0;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.8s ease;
  border-radius: 10rem 0 0;
  overflow: hidden;
  width: 7rem;
  height: 22rem;
  
  &.hidden {
    opacity: 0;
    transform: scale(0.8);
    width: 0;
    margin: 0;
    height: 0;
    min-height: 0;
  }

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }

  &.active {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
  }
  
  &.active.expanded {
    transform: scale(1);
    box-shadow: none;
    border-radius: 0;
    flex: 1;
    height: 400px;
    width: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 10rem;
    transition: all 0.8s ease;
  }
  
  &.active.expanded img {
    border-radius: 0;
    filter: brightness(1.1);
  }

  &:hover img {
    filter: brightness(1.2);
  }

  &.active img {
    filter: brightness(1.3) saturate(1.1);
  }

  .plus-icon {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: black;
    transition: all 0.5s ease;
    transform: scale(0);
  }
  
  &.active.expanded .plus-icon {
    transform: scale(0);
  }

  &:hover .plus-icon {
    transform: scale(1);
  }

  &.active .plus-icon {
    transform: scale(1.2);
    background-color: white;
  }
  
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(0);
  }
  
  &.active.expanded .close-icon {
    transform: scale(1);
  }
  
  &.active.expanded .close-icon:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
`;