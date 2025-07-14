import styled, { keyframes } from "styled-components";

// Animación para expandir desde la izquierda (parte gris)
const expandFromLeft = keyframes`
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
const expandFromRight = keyframes`
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

// Contenedor principal que mantiene altura fija
export const ExpandedContainer = styled.div<{ $isExpanded: boolean; $hasOpenDropdown?: boolean }>`
  width: 100%;
  height: 20rem; // Altura fija siempre
  position: relative;
  overflow: visible;
  z-index: 1;
`;

// Contenedor original
export const TextContainer = styled.div`
 display: flex;
 width: 100%;
 height: 20rem;
 background-color: transparent;
 position: absolute;
 top: 0;
 left: 0;
 overflow: hidden;
 animation: ${fadeInContent} 0.4s ease-in-out;
 justify-content: center;
 align-items: center;

 img {
  width: 20rem;
  height: 15rem;
 }

 h2 {
  margin: 0;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
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
 }

 button {
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;
  
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
`;

// Contenedor expandido unificado con z-index mayor
export const ExpandedContent = styled.div<{ $bgColor: string; $fromLeft?: boolean }>`
  background-color: ${props => props.$bgColor};
  width: 50%;
  height: auto;
  min-height: 20rem;
  position: absolute;
  top: 0;
  left: ${props => props.$fromLeft ? '0' : '50%'};
  animation: ${props => props.$fromLeft ? expandFromLeft : expandFromRight} 0.6s ease-in-out both;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0 3rem 0;
  overflow: visible;
  box-sizing: border-box;
  max-height: 90vh; // Limitar altura máxima
  overflow-y: auto; // Permitir scroll interno si es necesario
`;

export const InPeopleExpanded = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;

  img {
    height: 13rem;
    position: sticky; // Mantener la imagen fija
    top: 0;
  }

  & .text {
    width: 30rem;
    gap: 1rem;

    h2 {
      margin: 0;
      font-size: 1rem;
    }

    span {
      display: block;
      width: 3rem;
      height: 5px;
      background-color: black;
      margin-top: 0.4rem;
    }

    p {
      margin-top: 1rem;
      font-size: 0.8rem;

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

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    height: 13rem;
    flex-shrink: 0;
    align-self: flex-start; // Cambiar a flex-start
    position: sticky; // Mantener la imagen fija
    margin-top: 1rem;
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

    h2 {
      margin: 0;
      font-size: 1rem;
    }

    span {
      display: block;
      width: 3rem;
      height: 5px;
      background-color: black;
      margin-top: 0.4rem;
    }

    p {
      margin-top: 1rem;
      font-size: 0.8rem;

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
`;

// Botón de cierre
export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 6.5rem;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
  z-index: 20; // Z-index más alto
  transition: all 0.3s ease;
  
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

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }
`;

export const CapsulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
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

  h3 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-size: 1rem;
  }

  &.last {
    width: 30rem;
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

  h2 {
    color: white;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 100;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .arrow {
    transition: transform 0.3s ease;
    font-size: 0.8rem;
    color: #666;
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
  
  &:last-child {
    border-bottom: none;
  }
`;