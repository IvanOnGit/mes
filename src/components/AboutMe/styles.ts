import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: black;
`;

export const AboutMeContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 40rem;
  min-height: 40rem;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 200;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    margin-top: 22rem;
  }
`;

export const DropdownsAndIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;

  .dropdowns-section {
    display: flex;
    flex-direction: column;
    gap: 0;
    flex: 1;
    max-width: 500px;
  }

  .icons-section {
    flex: 1;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .dropdowns-section,
    .icons-section {
      width: 90%;
      max-width: none;
    }
  }
`;

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 4rem;
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
    background-color: white;
    border-radius: 50%;
    padding: 0.5rem;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    > div {
      opacity: 1;
      visibility: visible;
    }
  }

  /* Para los iconos de la columna derecha, ajustar el tooltip */
  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(9) {
    > div {
      left: auto;
      right: 0;
      transform: translateX(0);

      &::after {
        left: auto;
        right: 1rem;
        transform: translateX(0);
      }
    }
  }

  /* Para los iconos de la columna izquierda */
  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(7) {
    > div {
      left: 0;
      transform: translateX(0);

      &::after {
        left: 1rem;
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 100px;
    }
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #c0c0c0;
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  white-space: normal; /* Cambio importante aquí */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  min-width: 200px;
  max-width: 280px; /* Ancho máximo para que quepa bien */
  text-align: left;
  display: flex;
  align-items: flex-start; /* Cambio aquí para alinear al inicio */
  justify-content: flex-start;
  gap: 0.5rem;
  line-height: 1.4; /* Añadido para mejor legibilidad */

  /* Icono Hat antes del texto */
  &::before {
    content: '';
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url('/images/Hat.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
    margin-top: 0.1rem; /* Ajuste fino para alineación */
  }

  /* Flecha del globo */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #c0c0c0;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.5rem 0.75rem;
    min-width: 150px;
    max-width: 220px;

    &::before {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const Dropdown = styled.div`
  border-bottom: 1px solid white;
  overflow: visible;
  transition: all 0.4s ease;
  position: relative;
  
  /* Bolita blanca completa al inicio del border */
  &::before {
    content: '';
    position: absolute;
    bottom: -4.5px;
    left: 0;
    width: 9px;
    height: 9px;
    background-color: white;
    border-radius: 50%;
    z-index: 1;
  }
  
  &:last-of-type {
    border-bottom: none;
    
    &::before {
      display: none;
    }
  }
`;

export const DropdownHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  height: 4rem;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .dropdown-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: white;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.05em;

    .dropdown-icon {
      width: 2rem;
      height: 2.3rem;
      object-fit: contain;
    }

    #bio-icon {
      height: 3.3rem;
    }
  }

  .arrow {
    color: white;
    font-size: 1.5rem;
    font-weight: 200;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const DropdownContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease, opacity 0.4s ease;
  padding: ${props => props.$isOpen ? '1rem 1rem 1.5rem 1rem' : '0 1rem'};
  opacity: ${props => props.$isOpen ? '1' : '0'};

  p {
    color: white;
    font-size: 0.9rem;
    font-weight: 100;
    line-height: 1.6;
    margin: 0;
    margin-bottom: 1rem;
    text-align: justify;
  }

  p.extra-text {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    text-align: left;
  }
`;

export const CollageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  img {
    width: 80rem;
    height: 35rem;
    margin-top: 5rem;
    margin-bottom: 14rem;
    object-fit: contain;
  }

  img:last-of-type {
    width: 55rem;
    height: 10rem;
    margin-top: 50rem;
    object-fit: contain;
    position: absolute;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileCollageSection = styled.div`
  display: none;

  @media (max-width: 768px) {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 50rem;
    gap: 2rem;

    img {
      width: 23rem;
    }
  }
`;

export const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    width: 62.5rem;
    height: 10px;
    background-color: #1C1C1C;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    span {
      width: 90%;
      max-width: 350px;
    }
  }
`;

export const TitleTreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  

  h2 {
      color: white;
      font-size: 2rem;
      font-weight: 200;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    @media (max-width: 768px) {
      text-align: center;

      h2 {
        font-size: 1.5rem;
      }

      img {
        width: 22rem;
      }
    }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 7rem;

  span {
    width: 1px;
    height: 22.5rem;
    background-color: white;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    span {
      width: 91%;
      height: 1px;
      background-color: white;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    color: white;
    font-size: 1.3rem;
    font-weight: 200;
    margin: 0;
    padding: 0;
    width: 16rem;
    height: 4rem;
    margin-left: 1rem;
  }

  p {
    color: white;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 15rem;
    height: 12rem;
    text-align: justify;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 15rem;
    margin-top: 1rem;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #242424;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;
    
    h2 {
      width: 100%;
      height: auto;
      margin-left: 0;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      width: 100%;
      height: auto;
      text-align: justify;
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
      max-width: 320px;
    }
  }
`;

export const ModalOverlay = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isClosing ? 0 : 1};
  transition: opacity 0.3s ease;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    align-items: flex-start;
    padding-top: 2rem;
    left: auto;
    width: 90%;
  }
`;

export const ModalContent = styled.div<{ $isClosing: boolean }>`
  background-color: black;
  border: 1px solid white;
  border-radius: 1rem;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  position: relative;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding: 2rem;
  transform: ${props => props.$isClosing ? 'scale(0.9)' : 'scale(1)'};
  opacity: ${props => props.$isClosing ? 0 : 1};
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: ${props => props.$isClosing ? 'none' : 'modalOpen 0.3s ease'};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1c1c1c;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #404040;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #606060;
  }

  @keyframes modalOpen {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 200;
    width: 18rem;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    
    &:hover {
      background-color: #242424;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    margin: 0;
    max-height: 85vh;
    width: calc(100% - 2rem);
    max-width: none;
    
    h3 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: white;
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 17rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    p {
      width: 100%;
    }
  }
`;

export const ModalImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  h3 {
    margin-bottom: 1rem;
  }

  img {
    width: 15rem;
    height: 15rem;
  }

  img.meditatingBack {
    margin-top: 1rem;
    height: 22rem;
    display: none;
  }

  h4 {
    color: white;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    font-weight: 100;
    width: 15rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    h3, h4 {
      width: 100%;
      text-align: center;
    }

    img {
      width: 16rem;
      height: 12rem;
    }
  }
`;