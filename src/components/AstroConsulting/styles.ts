import styled, { keyframes } from "styled-components";

// Animación para expandir desde la izquierda (parte gris)
export const expandFromLeft = keyframes`
  0% {
    width: 50%;
    transform: translateX(0);
  }
  100% {
    width: 100%;
    transform: translateX(0);
  }
`;

// Animación para expandir desde la derecha (parte blanca)
export const expandFromRight = keyframes`
  0% {
    width: 50%;
    transform: translateX(0);
  }
  100% {
    width: 100%;
    transform: translateX(-50%);
  }
`;

const fadeInContent = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

// Contenedor principal que ahora tiene altura dinámica
export const ExpandedContainer = styled.div<{ $isExpanded: boolean; $hasOpenDropdown?: boolean }>`
  width: 100%;
  height: auto;
  min-height: 20rem;
  position: relative;
  overflow: visible;
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

// Contenedor original - solo se muestra cuando no está expandido
export const TextContainer = styled.div`
 display: flex;
 width: 100%;
 height: 20rem;
 background-color: transparent;
 position: relative;
 overflow: hidden;
 animation: ${fadeInContent} 0.4s ease-in-out;
 justify-content: center;
 align-items: center;

 @media (max-width: 768px) {
   flex-direction: column;
   height: auto;
   min-height: 60vh;
 }

 img {
  width: 20rem;
  height: 15rem;

  @media (max-width: 768px) {
    width: 15rem;
    height: 11rem;
  }

  @media (max-width: 480px) {
    width: 12rem;
    height: 9rem;
  }
 }

 h2 {
  margin: 0;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
 }

 span {
  display: block;
  width: 3rem;
  height: 5px;
  background-color: black;
  margin-bottom: 1rem;
 }

 p {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  width: 15rem;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.9rem;
    text-align: center;
  }
 }

 button {
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
  
  &:hover {
    background-color: #333;
  }
 }
`;

export const FirstContainer = styled.div`
  background-color: #D2D2D2;
  display: flex;
  gap: 2rem;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
    gap: 1rem;

    img {
      width: 20rem;
      height: 12rem;
    }

    h2 {
      width: 100%;
      margin-left: 2.5rem;
      text-align: left;
    }

    p {
      width: 80%;
      margin-left: 2.5rem;
      text-align: justify;
    }

    span {
      width: 80%;
      margin-left: 2.5rem;
    }

    button {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const SecondContainer = styled.div`
  background-color: white;
  display: flex;
  gap: 2rem;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
    gap: 1rem;

     @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
    gap: 1rem;

    img {
      width: 20rem;
      height: 12rem;
    }

    h2 {
      width: 100%;
      margin-left: 2.5rem;
      text-align: left;
    }

    p {
      width: 80%;
      margin-left: 2.5rem;
      text-align: justify;
    }

    span {
      width: 80%;
      margin-left: 2.5rem;
    }

    button {
      width: 80%;
    }
  }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`;

// Contenedor expandido unificado que ahora ocupa espacio real
export const ExpandedContent = styled.div<{ $bgColor: string; $fromLeft?: boolean }>`
  background-color: ${props => props.$bgColor};
  width: 100%;
  height: auto;
  min-height: 20rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0 3rem 0;
  overflow: visible;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem 0 2rem 0;
    max-height: none;
    overflow-y: visible;
    min-height: auto;
  }
  
  /* Animación de expansión */
  animation: ${fadeInContent} 0.6s ease-in-out;
  
  /* Simular el efecto de expansión desde un lado */
  ${props => props.$fromLeft ? `
    background: linear-gradient(90deg, ${props.$bgColor} 0%, ${props.$bgColor} 100%);
  ` : `
    background: linear-gradient(90deg, ${props.$bgColor} 0%, ${props.$bgColor} 100%);
  `}
`;

export const InPeopleExpanded = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem;
    margin-top: 0;
    text-align: center;

    img {
      width: 20.2rem;
      height: 12rem;
    }

    h2 {
      width: 100%;
      margin-left: 2.5rem;
      text-align: left;
    }

    p {
      text-align: justify;
    }
  }

  img {
    height: 13rem;
    position: sticky; // Mantener la imagen fija
    top: 0;
  }

  & .text {
    width: 30rem;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 90%;
    }

    h2 {
      margin: 0;
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }

    span {
      display: block;
      width: 3rem;
      height: 5px;
      background-color: black;
      margin-top: 0.4rem;

      @media (max-width: 768px) {
        margin: 0.4rem auto;
        width: 100%;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 0.8rem;

      @media (max-width: 768px) {
        font-size: 0.95rem;
        line-height: 1.5;
      }

      &.not {
        margin-top: 0;
      }
    }
  }
`;

export const InCompanyExpanded = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 16rem;
  flex-direction: column;
  margin-left: 13rem;

  img {
    height: 13rem;
    flex-shrink: 0;
    align-self: flex-start;
    position: sticky;
    margin-top: 1.7rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0 1rem;
    gap: 1.5rem;

    img {
      width: 22.2rem;
      height: 15rem;
    }

    h2 {
      width: 100%;
      margin-left: 2.5rem;
      text-align: left;
    }

    p {
      text-align: justify;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  & .text {
    width: 100%;
    max-width: 25rem;
    gap: 1rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
      max-width: 100%;
      text-align: center;
    }

    h2 {
      margin: 0;
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }

    span {
      display: block;
      width: 3rem;
      height: 5px;
      background-color: black;
      margin-top: 0.4rem;

      @media (max-width: 768px) {
        margin: 0.4rem auto;
        width: 100%;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 0.8rem;

      @media (max-width: 768px) {
        font-size: 0.95rem;
        line-height: 1.5;
      }

      &.not {
        margin-top: 0;
      }
    }
  }
`;

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 22rem;
  max-height: 60vh; // Limitar altura de los dropdowns
  overflow-y: hidden; // Permitir scroll si es necesario
  overflow-x: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: none;
    margin-bottom: 3rem;
  }
`;

// Botón de cierre
export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
  z-index: 20;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    bottom: 1rem;
    top: auto;
    right: auto;
    width: 85%;
    background-color: black;
    color: white;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

// Estilos originales del componente con z-index menor
export const TypesOfLecturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: black;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;
  z-index: 0; // Z-index menor para que no interfiera

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem 1rem;
  }

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Capsule = styled.div`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2rem;
  width: 12rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(50% - 0.4rem);
    min-width: 140px;
    padding: 0.7rem 0.5rem;
  }

  @media (max-width: 480px) {
    width: calc(50% - 0.4rem);
    min-width: 120px;
    padding: 0.6rem 0.4rem;
  }

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  &.last {
    width: 30rem;

    @media (max-width: 768px) {
      width: calc(100% - 1.6rem);
      margin: 0 0.8rem;
    }

    @media (max-width: 480px) {
      width: calc(100% - 0.8rem);
      margin: 0 0.4rem;
    }
  }
`;

export const ModalityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  height: 20rem;
  width: 100%;
  background-color: #1A1A1A;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }

  h2 {
    color: white;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 100;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const DropdownButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.2rem 0.5rem;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .arrow {
    transition: transform 0.3s ease;
    font-size: 0.8rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const DropdownContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s ease;
  background-color: rgba(0, 0, 0, 0.02);
  border-left: 2px solid #f0f0f0;
  width: 100%;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: #555;
  line-height: 1.4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;